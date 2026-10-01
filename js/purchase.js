const overlayMenu = document.querySelector(".smart-overlay-menu");
const menuOpenButton = document.querySelector(".btn-menu button");
const menuCloseButton = document.querySelector(".btn-menu-close button");
const mobileDepthButtons = [...document.querySelectorAll(".smart-depth-button")];

const setMenuOpen = (isOpen) => {
    if (!overlayMenu) return;
    overlayMenu.classList.toggle("on", isOpen);
    overlayMenu.setAttribute("aria-hidden", String(!isOpen));
    menuOpenButton?.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
    if (isOpen) menuCloseButton?.focus();
    else menuOpenButton?.focus();
};

menuOpenButton?.addEventListener("click", () => setMenuOpen(true));
menuCloseButton?.addEventListener("click", () => setMenuOpen(false));

mobileDepthButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const menuName = button.dataset.menu;
        const parent = button.closest("li");
        const panel = document.querySelector(`[data-depth="${menuName}"]`);
        const willOpen = button.getAttribute("aria-expanded") !== "true";

        mobileDepthButtons.forEach((item) => {
            const active = item === button && willOpen;
            item.setAttribute("aria-expanded", String(active));
            item.closest("li")?.classList.toggle("on", active);
        });
        document.querySelectorAll("[data-depth]").forEach((item) => item.classList.remove("on"));
        parent?.classList.toggle("on", willOpen);
        panel?.classList.toggle("on", willOpen);
    });
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && overlayMenu?.classList.contains("on")) setMenuOpen(false);
});

const form = document.querySelector("[data-product-form]");

if (form) {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("product");
    const collectionProducts = productArray.map((item, index) => ({
        id: `new-${index + 1}`,
        name: item.pname,
        image: index === 4 ? "./img/buy-info/body.jpg" : `./img/product-list/${item.pthumbFileName}`,
        description: "NEW COLLECTION",
        category: index === 4 ? "바디 & 헤어" : "NEW COLLECTION",
        price: item.price,
        options: item.poptions.map(size => ({
            size,
            price: getProductOptionPrice(item, size),
            original: getProductOriginalPrice(item, size)
        }))
    }));
    const discountedBestsellers = bestsellerProducts.map(item => ({
        ...item,
        options: item.options.map(option => ({
            ...option,
            original: option.price,
            price: Math.round(option.price * 0.95)
        }))
    }));
    const forestProducts = [
        { id: "forest-cleanser", name: "포레스트 캄 바디 클렌저", englishName: "Forest Calm Body Cleanser", asset: "product-01", size: "100ml", price: 59000 },
        { id: "forest-balm", name: "포레스트 캄 바디 밤", englishName: "Forest Calm Body Balm", asset: "product-02", size: "100ml", price: 47000 },
        { id: "forest-hand-wash", name: "포레스트 캄 핸드 워시", englishName: "Forest Calm Hand Wash", asset: "product-03", size: "500ml", price: 53000 },
        { id: "forest-serum", name: "포레스트 캄 라디언스 세럼", englishName: "Forest Calm Radiance Serum", asset: "product-04", size: "75ml", price: 39000 },
        { id: "forest-set", name: "포레스트 캄 에센셜 세트", englishName: "Forest Calm Essential Set", asset: "set", size: "1세트", price: 244000, original: 287000 }
    ].map(item => ({
        ...item,
        image: `./img/promotion/promo-01-${item.asset}.png`,
        category: item.id === "forest-set" ? "프로모션 세트" : "포레스트 캄",
        options: [{ size: item.size, price: item.price, original: item.original ?? item.price }]
    }));
    const otherPromotionProducts = [
        { id: "citrus-oil", name: "시트러스 바디오일", englishName: "Citrus Botanical Body Oil", promotion: "02", asset: "product-01", size: "100ml", price: 53000 },
        { id: "citrus-hand-wash", name: "시트러스 아로마틱 핸드 워시", englishName: "Citrus Aromatique Hand Wash", promotion: "02", asset: "product-02", size: "500ml", price: 38000 },
        { id: "citrus-serum", name: "시트러스 퓨어 래디언스 세럼", englishName: "Citrus Pure Radiance Serum", promotion: "02", asset: "product-03", size: "30ml", price: 89000 },
        { id: "citrus-balm", name: "시트러스 린드 바디 밤", englishName: "Citrus Rind Body Balm", promotion: "02", asset: "product-04", size: "100ml", price: 49000 },
        { id: "citrus-set", name: "시트러스 가든 에센셜 세트", englishName: "Citrus Garden Essential Set", promotion: "02", asset: "set", size: "1세트", price: 194650, original: 229000 },
        { id: "relaxing-balm", name: "이스트로스 바디 밤", englishName: "Istros Aromatique Body Balm", promotion: "03", asset: "product-01", size: "100ml", price: 47000 },
        { id: "relaxing-spray", name: "이스트로스 룸 스프레이", englishName: "Istros Aromatique Room Spray", promotion: "03", asset: "product-02", size: "100ml", price: 76000 },
        { id: "relaxing-candle", name: "이스트로스 캔들", englishName: "Istros Aromatique Candle", promotion: "03", asset: "product-03", size: "300g", price: 115000 },
        { id: "relaxing-diffuser", name: "이스트로스 룸 디퓨저", englishName: "Istros Aromatique Room Diffuser", promotion: "03", asset: "product-04", size: "200ml", price: 110000 },
        { id: "relaxing-set", name: "릴렉싱 에센셜 세트", englishName: "Relaxing Essential Set", promotion: "03", asset: "set", size: "1세트", price: 295000, original: 348000 }
    ].map(item => ({
        ...item,
        image: `./img/promotion/promo-${item.promotion}-${item.asset}.png`,
        category: item.asset === "set" ? "프로모션 세트" : item.promotion === "02" ? "시트러스 가든" : "릴렉싱",
        options: [{ size: item.size, price: item.price, original: item.original ?? item.price }]
    }));
    const promotionProducts = [
        ...forestProducts.map(item => ({ ...item, promotion: "01" })),
        ...otherPromotionProducts
    ];
    const product = [...discountedBestsellers, ...collectionProducts, ...promotionProducts].find(item => item.id === productId);
    document.body.classList.toggle("is-promotion-product", Boolean(product?.promotion));
    const hasThreeOptions = product?.options.length === 3;
    document.body.classList.toggle("has-three-options", hasThreeOptions);
    const isSunlitReference = !productId || product?.id === "new-5";
    document.body.classList.toggle("is-sunlit-reference", isSunlitReference);
    document.body.style.setProperty("--purchase-option-count", product?.options.length ?? 2);
    const englishNames = {
        "new-1": "Mineral Bath Salts",
        "new-2": "Aromatic Pillow Mist",
        "new-3": "Solid Perfume Balm",
        "new-4": "Calming Body Oil",
        "new-5": "Sunlit Botanical Body Balm",
        "new-6": "Morning Dew Hydrating Facial Mist",
        "new-7": "First Light Vitamin Facial Serum",
        "new-8": "Citrus Awakening Body Cleanser",
        "new-9": "Selene Pulse Point Roll-On",
        "new-10": "Hypnos Mineral Bath Salts",
        "new-11": "Somnus Pillow and Linen Mist",
        "new-12": "Vesper Overnight Body Balm",
        "reverence-hand-wash": "Reverence Aromatique Hand Wash",
        "fable-serum": "Fable Facial Serum",
        "purifying-cleanser": "Purifying Facial Cleanser",
        "tacit-perfume": "Tacit Eau de Parfum",
        "balancing-shampoo": "Balancing Shampoo",
        "immediate-mist": "Immediate Moisture Facial Mist",
        "parsley-cream": "Parsley Facial Hydrating Cream"
    };
    const initialOption = product?.options.find(option => option.size === params.get("option")) ?? product?.options[0];

    if (product) {
        document.title = `${product.name} | Aesop`;
        document.querySelector("#product-title").textContent = product.name;
        document.querySelector(".product-name-en").textContent = product.englishName ?? englishNames[product.id];
        const breadcrumbs = document.querySelectorAll(".breadcrumb li");
        breadcrumbs[2].querySelector("a").textContent = product.category;
        breadcrumbs[3].textContent = product.name;
        // 제품 사진 한 장과 제품별 연출 사진 세 장을 표시합니다.
        const image = document.querySelector("[data-gallery-main]");
        image.src = product.image;
        image.alt = `${product.name} 제품`;
        const thumbnailList = document.querySelector(".product-thumbnails");
        const thumbnailTemplate = thumbnailList.querySelector("button").cloneNode(true);
        const gallery = [
            { src: product.image, alt: `${product.name} 제품` },
            ...(productGalleries[product.id] ?? [])
        ];
        thumbnailList.replaceChildren(...gallery.map((item, index) => {
            const thumbnail = thumbnailTemplate.cloneNode(true);
            thumbnail.classList.toggle("is-active", index === 0);
            thumbnail.setAttribute("aria-pressed", String(index === 0));
            thumbnail.setAttribute("aria-label", `${item.alt} 보기`);
            thumbnail.dataset.image = item.src;
            thumbnail.dataset.alt = item.alt;
            const preview = thumbnail.querySelector("img");
            preview.src = item.src;
            preview.alt = item.alt;
            preview.loading = "lazy";
            return thumbnail;
        }));
        const optionList = document.querySelector(".size-options");
        const optionTemplate = optionList.querySelector("button").cloneNode(true);
        optionList.querySelectorAll("button").forEach(button => button.remove());
        product.options.forEach(item => {
            const option = optionTemplate.cloneNode(true);
            const active = item === initialOption;
            option.classList.toggle("is-selected", active);
            option.setAttribute("aria-pressed", String(active));
            option.dataset.size = item.size;
            option.dataset.price = String(item.price);
            option.dataset.original = String(item.original ?? item.price);
            option.querySelectorAll("span")[0].textContent = item.size;
            option.querySelectorAll("span")[1].textContent = `${item.price.toLocaleString("ko-KR")}원`;
            optionList.append(option);
        });
        const summary = document.querySelector(".dialog-product");
        summary.querySelector("img").src = product.image;
        summary.querySelector("img").alt = product.name;
        summary.querySelector("strong").textContent = product.name;

        document.querySelector("#story-title").textContent = `${product.name} 상세 설명`;

        if (product.promotion) {
            if (product.asset === "set") {
                form.querySelector(".buy-button").textContent = "세트 구매하기";
            }
        }

    }

    const communityId = product?.id ?? "new-5";
    const isSunlitBalm = communityId === "new-5";
    document.body.classList.toggle("is-sunlit-balm", isSunlitBalm);
    const community = productCommunities[communityId] ?? productCommunities["new-5"];
    const reviewPhotos = (productReviewPhotos[communityId] ?? []).map(name => `./img/reviews/${name}.png`);
    [...document.querySelectorAll(".review-list li")].forEach((review, index) => {
        if (isSunlitBalm) return;
        if (index >= community.reviews.length) { review.remove(); return; }
        review.querySelector(".review-meta strong").textContent = community.reviewAuthors[index];
        if (index > 0) {
            const stars = review.querySelector(".review-stars");
            stars.innerHTML = "★★★★<i>★</i>";
            stars.setAttribute("aria-label", "별점 4점");
        }
        const body = review.querySelector(".review-body");
        body.querySelector("img")?.remove();
        body.querySelector("p").textContent = community.reviews[index];
        const photo = index === 0 ? reviewPhotos[0] : index === 2 ? reviewPhotos[1] : null;
        if (photo) {
            const image = document.createElement("img");
            image.src = photo;
            image.alt = `${product?.name ?? "선릿 보태니컬 바디 밤"} 후기 사진`;
            image.loading = "lazy";
            body.prepend(image);
        }
    });
    document.querySelectorAll(".qna-list li").forEach((item, index) => {
        item.querySelector(".qna-question").textContent = community.qna[index][0];
        item.querySelector("p").textContent = community.qna[index][1];
    });
    const mainImage = document.querySelector("[data-gallery-main]");
    const thumbnails = [...document.querySelectorAll(".product-thumbnail")];
    const sizeOptions = [...document.querySelectorAll(".size-option")];
    const quantityOutput = document.querySelector("[data-quantity]");
    const unitPriceOutput = document.querySelector("[data-unit-price]");
    const originalPriceOutput = document.querySelector("[data-original-price]");
    const totalOutput = document.querySelector("[data-total]");
    const dialog = document.querySelector("[data-order-dialog]");
    const toast = document.querySelector("[data-toast]");
    let quantity = 1;
    let selectedPrice = initialOption?.price ?? 49400;
    let selectedOriginalPrice = initialOption?.original ?? initialOption?.price ?? 52000;
    let selectedSize = initialOption?.size ?? "120mL";
    let toastTimer;

    const won = (value) => `${new Intl.NumberFormat("ko-KR").format(value)}원`;

    const showToast = (message) => {
        if (!toast) return;
        window.clearTimeout(toastTimer);
        toast.textContent = message;
        toast.classList.add("is-visible");
        toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
    };

    const updateOrder = () => {
        const total = selectedPrice * quantity;
        if (product) document.querySelector("#product-title").textContent = `${product.name} ${selectedSize}`;
        quantityOutput.textContent = String(quantity);
        unitPriceOutput.textContent = won(selectedPrice);
        originalPriceOutput.textContent = won(selectedOriginalPrice);
        originalPriceOutput.hidden = selectedOriginalPrice === selectedPrice;
        const discount = document.querySelector(".discount-rate");
        const discountRate = Math.round((1 - selectedPrice / selectedOriginalPrice) * 100);
        discount.hidden = discountRate <= 0;
        discount.textContent = `${discountRate}%`;
        totalOutput.innerHTML = `${new Intl.NumberFormat("ko-KR").format(total)}<small>원</small>`;

        dialog?.querySelector("[data-dialog-size]")?.replaceChildren(selectedSize);
        dialog?.querySelector("[data-dialog-quantity]")?.replaceChildren(String(quantity));
        dialog?.querySelector("[data-dialog-total]")?.replaceChildren(won(total));
    };

    let galleryTimer;
    thumbnails.forEach((button) => {
        button.addEventListener("click", () => {
            if (!mainImage || button.classList.contains("is-active")) return;
            thumbnails.forEach((item) => {
                const isActive = item === button;
                item.classList.toggle("is-active", isActive);
                item.setAttribute("aria-pressed", String(isActive));
            });
            mainImage.classList.add("is-changing");
            window.clearTimeout(galleryTimer);
            galleryTimer = window.setTimeout(() => {
                mainImage.src = button.dataset.image;
                mainImage.alt = button.dataset.alt;
                mainImage.classList.remove("is-changing");
            }, 130);
        });
    });

    sizeOptions.forEach((button) => {
        button.addEventListener("click", () => {
            sizeOptions.forEach((item) => {
                const isSelected = item === button;
                item.classList.toggle("is-selected", isSelected);
                item.setAttribute("aria-pressed", String(isSelected));
            });
            selectedSize = button.dataset.size;
            selectedPrice = Number(button.dataset.price);
            selectedOriginalPrice = Number(button.dataset.original);
            updateOrder();
        });
    });

    document.querySelector("[data-quantity-minus]")?.addEventListener("click", () => {
        if (quantity === 1) {
            showToast("최소 주문 수량은 1개입니다.");
            return;
        }
        quantity -= 1;
        updateOrder();
    });

    document.querySelector("[data-quantity-plus]")?.addEventListener("click", () => {
        if (quantity === 99) {
            showToast("한 번에 최대 99개까지 주문할 수 있습니다.");
            return;
        }
        quantity += 1;
        updateOrder();
    });

    document.querySelector("[data-favorite]")?.addEventListener("click", (event) => {
        const button = event.currentTarget;
        const next = button.getAttribute("aria-pressed") !== "true";
        button.setAttribute("aria-pressed", String(next));
        button.setAttribute("aria-label", next ? "관심 상품에서 제거" : "관심 상품에 추가");
        showToast(next ? "관심 상품에 추가했습니다." : "관심 상품에서 제거했습니다.");
    });

    document.querySelector("[data-gift]")?.addEventListener("click", (event) => {
        const button = event.currentTarget;
        const next = button.getAttribute("aria-pressed") !== "true";
        button.setAttribute("aria-pressed", String(next));
        showToast(next ? "선물 포장을 선택했습니다." : "선물 포장을 해제했습니다.");
    });

    document.querySelector("[data-share]")?.addEventListener("click", async () => {
        const shareData = { title: document.title, text: product?.name ?? "선릿 보태니컬 바디 밤", url: window.location.href };
        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else if (navigator.clipboard) {
                await navigator.clipboard.writeText(window.location.href);
                showToast("상품 주소를 복사했습니다.");
            } else {
                showToast("브라우저 주소창에서 상품 주소를 복사해 주세요.");
            }
        } catch (error) {
            if (error.name !== "AbortError") showToast("상품 주소를 복사하지 못했습니다.");
        }
    });

    document.querySelector("[data-coupon]")?.addEventListener("click", (event) => {
        const button = event.currentTarget;
        button.classList.add("is-downloaded");
        button.innerHTML = "✓ DOWNLOADED";
        showToast("5% 할인 쿠폰을 내려받았습니다.");
    });

    document.querySelector("[data-add-cart]")?.addEventListener("click", () => {
        const counts = [...document.querySelectorAll(".cart-count")];
        const current = Number(counts[0]?.textContent || 0) + quantity;
        counts.forEach((count) => {
            count.textContent = String(current);
            count.hidden = false;
        });
        showToast(`${selectedSize} ${quantity}개를 장바구니에 담았습니다.`);
    });

    document.querySelectorAll("[data-benefit]").forEach((button) => {
        button.addEventListener("click", () => {
            showToast(button.dataset.benefit === "installment" ? "무이자 할부 혜택은 카드사별로 다를 수 있습니다." : "카드사별 결제 혜택은 주문서에서 확인할 수 있습니다.");
        });
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        updateOrder();
        if (dialog?.showModal) dialog.showModal();
        else showToast("주문서 연결 전 상품 확인 단계입니다.");
    });

    // 모달 내용이 아닌 어두운 배경을 누르면 닫습니다.
    dialog?.addEventListener("click", (event) => {
        if (event.target === dialog) dialog.close("cancel");
    });

    document.querySelector("[data-order-confirm]")?.addEventListener("click", () => {
        showToast("주문서 페이지 연결 전 데모 화면입니다.");
    });

    const tabs = [...document.querySelectorAll("[data-tab]")];
    const panels = [...document.querySelectorAll("[data-panel]")];

    const activateTab = (name, moveFocus = false) => {
        tabs.forEach((tab) => {
            const active = tab.dataset.tab === name;
            tab.classList.toggle("is-active", active);
            tab.setAttribute("aria-selected", String(active));
            tab.tabIndex = active ? 0 : -1;
            if (active && moveFocus) tab.focus();
        });
        panels.forEach((panel) => {
            panel.hidden = panel.dataset.panel !== name;
        });
    };

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => activateTab(tab.dataset.tab));
        tab.addEventListener("keydown", (event) => {
            if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
            event.preventDefault();
            const offset = event.key === "ArrowRight" ? 1 : -1;
            const next = tabs[(index + offset + tabs.length) % tabs.length];
            activateTab(next.dataset.tab, true);
        });
    });

    document.querySelectorAll(".qna-list li > button").forEach((button) => {
        button.addEventListener("click", () => {
            const answer = button.nextElementSibling;
            const expanded = button.getAttribute("aria-expanded") === "true";
            button.setAttribute("aria-expanded", String(!expanded));
            answer.hidden = expanded;
        });
    });

    document.querySelector("[data-qna-write]")?.addEventListener("click", () => {
        showToast("문의 작성 기능을 연결할 수 있도록 버튼을 준비했습니다.");
    });

    activateTab("review");
    updateOrder();
}
