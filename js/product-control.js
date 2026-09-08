function formatPrice(value) {
    const number = Number(value);
    if (!Number.isFinite(number)) return '0';
    return number.toLocaleString('ko-KR');
}

function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[character]);
}

const productList = document.querySelector('[data-product-list]');
const productSort = document.querySelector('[data-product-sort]');

if (productList) {
    // 상품 데이터를 기존 New 컬렉션 카드 구조로 출력합니다.
    productList.innerHTML = productArray.map((product, index) => {
        const name = escapeHtml(product.pname);
        return `<li class="collection-card" data-product-card
                    data-name="${name}" data-price="${product.price}" data-order="${index}">
                    <article>
                        <a class="collection-image" href="./purchase.html" aria-label="${name} 상세 보기">
                            <img src="./img/product-list/${escapeHtml(product.pthumbFileName)}"
                                 alt="${name}" loading="lazy">
                        </a>
                        <div class="collection-info">
                            <h3>${name}</h3>
                            <p class="collection-price">
                                <strong>${formatPrice(product.price)}</strong><span>원</span>
                            </p>
                        </div>
                        <label class="product-option">
                            <span class="sr-only">${name} 용량 선택</span>
                            <select name="option-${index}">
                                ${product.poptions.map(option => `<option value="${escapeHtml(option)}">${escapeHtml(option)}</option>`).join('')}
                            </select>
                        </label>
                        <button class="add-to-cart" type="button" data-add-to-cart>
                            장바구니 담기
                        </button>
                    </article>
                </li>`;
    }).join('');

    function sortProducts() {
        const cards = Array.from(productList.children);
        cards.sort((a, b) => {
            switch (productSort.value) {
                case 'price-low': return Number(a.dataset.price) - Number(b.dataset.price);
                case 'price-high': return Number(b.dataset.price) - Number(a.dataset.price);
                case 'name': return a.dataset.name.localeCompare(b.dataset.name, 'ko');
                default: return Number(a.dataset.order) - Number(b.dataset.order);
            }
        });
        // 요소를 이동하여 정렬할 때도 선택한 용량을 유지합니다.
        productList.append(...cards);
    }

    if (productSort) {
        productSort.addEventListener('change', sortProducts);
        sortProducts();
    }
}