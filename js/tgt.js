const slider = document.querySelector('.tgt-img');

let isDown = false;
let startX = 0;
let startScrollLeft = 0;
let moved = false;

slider.addEventListener('pointerdown', (e) => {
    isDown = true;
    moved = false;

    startX = e.clientX;
    startScrollLeft = slider.scrollLeft;

});

slider.addEventListener('pointermove', (e) => {
    if(!isDown) return;

    const moveX = e.clientX - startX;

    if(Math.abs(moveX) > 5){
        moved = true;
        slider.setPointerCapture(e.pointerId);
    }

    slider.scrollLeft = startScrollLeft - moveX;
});

slider.addEventListener('pointerup', () => {
    isDown = false;
});

slider.addEventListener('pointercancel', () => {
    isDown = false;
});

/* 드래그 후 링크가 눌리는 것 방지 */
slider.addEventListener('click', (e) => {
    if(moved){
        e.preventDefault();
        e.stopPropagation();
    }
}, true);

const togetherTabs = [...document.querySelectorAll('.tgt-txt > li')];
const togetherList = slider.querySelector('ul');
const recommendedProducts = [...togetherList.children];

function renderRecentProducts() {
    let recent = [];
    try {
        const stored = JSON.parse(localStorage.getItem('recentProducts') || '[]');
        if (Array.isArray(stored)) {
            recent = stored.filter(item => item && typeof item.name === 'string'
                && typeof item.image === 'string'
                && /^\.\/img\/product-list\/[\w-]+\.png$/.test(item.image)
                && Number.isFinite(item.price));
        }
    } catch {
        // 저장된 내역이 없으면 빈 목록 안내를 표시합니다.
    }
    togetherList.replaceChildren();
    if (!recent.length) {
        const empty = document.createElement('li');
        empty.textContent = '최근 본 제품이 없습니다. 상품 목록에서 제품을 눌러보세요.';
        togetherList.append(empty);
        return;
    }
    recent.forEach(product => {
        const card = document.createElement('li');
        card.className = 'tgt-recent-card';
        const link = document.createElement('a');
        link.href = './purchase.html';
        const image = document.createElement('img');
        image.src = product.image;
        image.alt = product.name;
        image.loading = 'lazy';
        link.append(image);
        link.addEventListener('click', () => {
            try {
                localStorage.setItem('recentProducts', JSON.stringify([
                    product, ...recent.filter(item => item.image !== product.image)
                ].slice(0, 12)));
            } catch { /* 저장 실패 시에도 링크는 동작합니다. */ }
        });
        const caption = document.createElement('div');
        caption.className = 'tgt-caption';
        const captionName = document.createElement('div');
        captionName.className = 'tgt-caption-1';
        const name = document.createElement('h4');
        const nameBold = document.createElement('b');
        nameBold.textContent = product.name;
        name.append(nameBold);
        captionName.append(name);
        const captionDetails = document.createElement('div');
        captionDetails.className = 'tgt-caption-2';
        const option = document.createElement('h4');
        option.textContent = typeof product.option === 'string' ? product.option : '';
        const priceHeading = document.createElement('h4');
        const price = document.createElement('b');
        price.textContent = `${product.price.toLocaleString('ko-KR')}원`;
        priceHeading.append(price);
        captionDetails.append(option, priceHeading);
        caption.append(captionName, captionDetails);
        const cart = document.createElement('div');
        cart.className = 'tgt-button';
        const cartLink = document.createElement('a');
        cartLink.href = '#';
        const cartHeading = document.createElement('h4');
        const cartLabel = document.createElement('b');
        cartLabel.textContent = '장바구니에 담기';
        cartHeading.append(cartLabel);
        cartLink.append(cartHeading);
        cartLink.addEventListener('click', event => {
            event.preventDefault();
            window.alert('장바구니를 담았습니다.');
        });
        cart.append(cartLink);
        card.append(link, caption, cart);
        togetherList.append(card);
    });
}

togetherTabs.forEach((tab, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = tab.textContent.trim();
    button.setAttribute('aria-pressed', String(index === 0));
    tab.replaceChildren(button);
    button.addEventListener('click', () => {
        togetherTabs.forEach((item, itemIndex) => {
            item.classList.toggle('tgt-underline', itemIndex === index);
            item.classList.toggle('tgt-color', itemIndex !== index);
            item.querySelector('button').setAttribute('aria-pressed', String(itemIndex === index));
        });
        if (index === 1) renderRecentProducts();
        else togetherList.replaceChildren(...recommendedProducts);
        slider.scrollLeft = 0;
    });
});
