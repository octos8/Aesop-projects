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
    let selectedPrice = 49400;
    let selectedOriginalPrice = 52000;
    let selectedSize = "120mL";
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
        quantityOutput.textContent = String(quantity);
        unitPriceOutput.textContent = won(selectedPrice);
        originalPriceOutput.textContent = won(selectedOriginalPrice);
        originalPriceOutput.hidden = selectedOriginalPrice === selectedPrice;
        totalOutput.innerHTML = `${new Intl.NumberFormat("ko-KR").format(total)}<small>원</small>`;

        dialog?.querySelector("[data-dialog-size]")?.replaceChildren(selectedSize);
        dialog?.querySelector("[data-dialog-quantity]")?.replaceChildren(String(quantity));
        dialog?.querySelector("[data-dialog-total]")?.replaceChildren(won(total));
    };

    thumbnails.forEach((button) => {
        button.addEventListener("click", () => {
            if (!mainImage || button.classList.contains("is-active")) return;
            thumbnails.forEach((item) => {
                const isActive = item === button;
                item.classList.toggle("is-active", isActive);
                item.setAttribute("aria-pressed", String(isActive));
            });
            mainImage.classList.add("is-changing");
            window.setTimeout(() => {
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
        const shareData = { title: document.title, text: "선릿 보태니컬 바디 밤", url: window.location.href };
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
