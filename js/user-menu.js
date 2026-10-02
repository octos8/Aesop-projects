(() => {
    const money = value => `${Number(value).toLocaleString('ko-KR')}원`;
    const readCart = () => {
        try { const items = JSON.parse(localStorage.getItem('aesopCart') || '[]'); return Array.isArray(items) ? items : []; }
        catch { return []; }
    };
    const saveCart = items => { localStorage.setItem('aesopCart', JSON.stringify(items)); };
    const dialog = document.createElement('dialog');
    dialog.className = 'shop-dialog';
    dialog.setAttribute('aria-labelledby', 'shop-dialog-title');
    dialog.innerHTML = '<button type="button" class="shop-close" aria-label="닫기">×</button><div class="shop-dialog-content"></div>';
    document.body.append(dialog);
    const content = dialog.querySelector('.shop-dialog-content');
    const preparationDialog = document.createElement('dialog');
    preparationDialog.className = 'shop-dialog shop-preparation-dialog';
    preparationDialog.setAttribute('aria-labelledby', 'preparation-title');
    preparationDialog.setAttribute('aria-describedby', 'preparation-description');
    preparationDialog.innerHTML = '<button type="button" class="shop-close" aria-label="닫기">×</button><h2 id="preparation-title"><strong>현재 준비 중인 페이지입니다.</strong></h2><p id="preparation-description">더 좋은 모습으로 곧 업데이트하겠습니다.</p>';
    document.body.append(preparationDialog);
    preparationDialog.querySelector('.shop-close').addEventListener('click', () => preparationDialog.close());
    document.querySelectorAll('.gnb > li > a, .gnb-smart > li > a, .smart-depth-button[data-menu="about"], .gnb2depth-smart[data-depth="about"] a').forEach(link => {
        const menuName = link.textContent.replace(/\s+/g, '').toUpperCase();
        if (menuName !== 'BESTSELLER' && menuName !== 'ABOUT' && !link.matches('[data-menu="about"], .gnb2depth-smart[data-depth="about"] a')) return;
        link.setAttribute('aria-haspopup', 'dialog');
        link.addEventListener('click', event => {
            event.preventDefault();
            event.stopImmediatePropagation();
            if (!preparationDialog.open) preparationDialog.showModal();
        }, true);
    });
    document.querySelectorAll('.gnb > li').forEach(item => {
        if (item.querySelector(':scope > a')?.textContent.trim().toUpperCase() !== 'ABOUT') return;
        item.querySelectorAll('.gnb2depth a').forEach(link => {
            link.setAttribute('aria-haspopup', 'dialog');
            link.addEventListener('click', event => {
                event.preventDefault();
                if (!preparationDialog.open) preparationDialog.showModal();
            });
        });
    });
    dialog.querySelector('.shop-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
    dialog.addEventListener('close', () => document.body.classList.remove('shop-dialog-open'));
    const open = () => {
        content.querySelector('h2').id = 'shop-dialog-title';
        document.querySelector('.smart-overlay-menu')?.classList.remove('on');
        document.querySelector('.smart-overlay-menu')?.setAttribute('aria-hidden', 'true');
        document.querySelector('.btn-menu button')?.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
        document.body.classList.add('shop-dialog-open');
        if (!dialog.open) dialog.showModal();
    };
    function renderCart() {
        content.innerHTML = '<h2 id="shop-dialog-title">장바구니</h2><p class="shop-login-note">회원가입 없이 상품을 담고 비회원으로 주문할 수 있습니다.</p><div class="shop-cart-items"></div>';
        const list = content.querySelector('.shop-cart-items');
        const items = readCart();
        if (!items.length) { list.innerHTML = '<p class="shop-empty">장바구니가 비어 있습니다.</p><a class="shop-primary" href="./shoppingLIst.html">상품 둘러보기</a>'; return; }
        items.forEach((item, index) => {
            const row = document.createElement('div'); row.className = 'shop-cart-row';
            const link = document.createElement('a'); link.href = `./purchase.html?product=${encodeURIComponent(item.id)}&option=${encodeURIComponent(item.option)}`; link.textContent = item.name;
            const detail = document.createElement('p'); detail.textContent = `${item.option} · ${money(item.price)}`;
            const controls = document.createElement('div'); controls.className = 'shop-quantity';
            const quantity = document.createElement('span'); quantity.textContent = item.quantity;
            [['−', -1], ['+', 1]].forEach(([label, delta]) => {
                const button = document.createElement('button'); button.type = 'button'; button.textContent = label; button.setAttribute('aria-label', `${item.name} 수량 ${delta > 0 ? '늘리기' : '줄이기'}`);
                button.disabled = delta < 0 && item.quantity <= 1;
                button.addEventListener('click', () => { items[index].quantity = Math.max(1, item.quantity + delta); saveCart(items); renderCart(); });
                controls.append(button); if (delta < 0) controls.append(quantity);
            });
            const remove = document.createElement('button'); remove.type = 'button'; remove.textContent = '삭제'; remove.addEventListener('click', () => { items.splice(index, 1); saveCart(items); renderCart(); });
            controls.append(remove); row.append(link, detail, controls); list.append(row);
        });
        const total = document.createElement('p'); total.className = 'shop-cart-total'; total.textContent = `총 상품 금액 ${money(items.reduce((sum, item) => sum + item.price * item.quantity, 0))}`; list.append(total);
        const checkout = document.createElement('button'); checkout.type = 'button'; checkout.className = 'shop-primary shop-checkout-button'; checkout.textContent = '비회원으로 구매하기';
        checkout.addEventListener('click', () => renderCheckout(readCart(), true)); list.append(checkout);
    }
    function renderCheckout(items, fromCart = false) {
        if (!items.length) { renderCart(); open(); return; }
        const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        content.innerHTML = `<h2>비회원 주문서</h2><p class="shop-login-note">회원가입 없이 주문할 수 있습니다. 포트폴리오 데모이며 실제 결제·배송은 진행되지 않습니다.</p>
            <div class="shop-order-items"></div><p class="shop-cart-total">상품 합계 ${money(total)} · 배송비 무료</p>
            <form class="shop-checkout-form">
                <label>받는 분<input name="recipient" autocomplete="shipping name" required maxlength="50"></label>
                <label>연락처<input name="phone" type="tel" autocomplete="shipping tel" required minlength="9" maxlength="20" placeholder="010-1234-5678"></label>
                <label>이메일<input name="email" type="email" autocomplete="email" required maxlength="100"></label>
                <label>우편번호<input name="postcode" autocomplete="shipping postal-code" required inputmode="numeric" pattern="[0-9]{5}" maxlength="5"></label>
                <label>배송 주소<input name="address" autocomplete="shipping address-line1" required maxlength="200"></label>
                <label>상세 주소 (선택)<input name="detail" autocomplete="shipping address-line2" maxlength="100"></label>
                <label>배송 요청사항 (선택)<input name="message" maxlength="200"></label>
                <label class="shop-checkout-consent"><input name="consent" type="checkbox" required> 데모 주문 진행에 동의합니다. 입력 정보는 저장되거나 전송되지 않습니다.</label>
                <button type="submit" class="shop-primary">${money(total)} 데모 주문 완료하기</button>
                <button type="button" class="shop-checkout-back">${fromCart ? '장바구니로 돌아가기' : '상품으로 돌아가기'}</button>
            </form>`;
        const summary = content.querySelector('.shop-order-items');
        items.forEach(item => { const row = document.createElement('p'); row.textContent = `${item.name} / ${item.option} / ${item.quantity}개 — ${money(item.price * item.quantity)}`; summary.append(row); });
        const form = content.querySelector('form');
        form.querySelector('.shop-checkout-back').addEventListener('click', () => { if (fromCart) renderCart(); else dialog.close(); });
        form.addEventListener('submit', event => {
            event.preventDefault();
            ['recipient', 'address'].forEach(name => { const field = form.elements[name]; field.setCustomValidity(field.value.trim() ? '' : '내용을 입력해 주세요.'); });
            const phone = form.elements.phone;
            phone.setCustomValidity(/^[0-9+() -]+$/.test(phone.value) && phone.value.replace(/\D/g, '').length >= 9 ? '' : '올바른 연락처를 입력해 주세요.');
            if (!form.reportValidity()) return;
            // Only a demo: never persist personal information or claim payment succeeded.
            if (fromCart) {
                const remaining = readCart();
                items.forEach(ordered => { const index = remaining.findIndex(item => item.id === ordered.id && item.option === ordered.option); if (index < 0) return; remaining[index].quantity -= ordered.quantity; if (remaining[index].quantity <= 0) remaining.splice(index, 1); });
                saveCart(remaining);
            }
            content.innerHTML = '<h2>비회원 데모 주문 완료</h2><p class="shop-empty">주문 과정을 완료했습니다.<br>실제 주문 접수, 결제 및 배송은 이루어지지 않았습니다.</p><p class="shop-cart-total"></p><a class="shop-primary" href="./shoppingLIst.html">계속 쇼핑하기</a>';
            content.querySelector('.shop-cart-total').textContent = `주문 상품 ${items.reduce((sum, item) => sum + item.quantity, 0)}개 · ${money(total)}`;
            content.querySelector('h2').id = 'shop-dialog-title';
            content.querySelector('a').focus();
        });
        form.addEventListener('input', event => event.target.setCustomValidity?.(''));
        open(); form.elements.recipient.focus();
    }
    window.shopCart = {
        add(item) {
            const items = readCart(); const existing = items.find(entry => entry.id === item.id && entry.option === item.option);
            if (existing) existing.quantity += item.quantity; else items.push(item);
            saveCart(items); renderCart(); open();
        },
        open() { renderCart(); open(); },
        checkout(item) { renderCheckout([item]); }
    };
    const searchPanels = [];
    function setupSearch(link) {
        const header = link.closest('header, .smart-overlay-menu-header');
        if (!header) return;
        const panel = document.createElement('section');
        panel.className = 'shop-inline-search';
        panel.id = `product-search-${searchPanels.length}`;
        panel.hidden = true;
        panel.setAttribute('aria-label', '상품 검색');
        panel.innerHTML = `<div class="common-frame"><form class="shop-search-form" role="search"><label for="${panel.id}-input">찾으시는 상품을 입력해주세요.</label><div><input id="${panel.id}-input" type="search" placeholder="상품명 검색" required autocomplete="off"><button class="shop-primary" type="submit">검색</button></div></form><div class="shop-search-results" aria-live="polite"></div></div>`;
        header.append(panel);
        const form = panel.querySelector('form'); const input = form.querySelector('input'); const results = panel.querySelector('.shop-search-results');
        const close = () => { panel.hidden = true; link.setAttribute('aria-expanded', 'false'); };
        searchPanels.push({ close });
        link.href = `#${panel.id}`;
        link.setAttribute('aria-controls', panel.id);
        link.setAttribute('aria-expanded', 'false');
        link.addEventListener('click', event => {
            event.preventDefault();
            const shouldOpen = panel.hidden;
            searchPanels.forEach(searchPanel => searchPanel.close());
            if (shouldOpen) { panel.hidden = false; link.setAttribute('aria-expanded', 'true'); input.focus(); }
        });
        panel.addEventListener('keydown', event => {
            if (event.key === 'Escape') { event.stopPropagation(); close(); link.focus(); }
        });
        form.addEventListener('submit', event => {
            event.preventDefault(); const normalize = text => text.toLowerCase().replace(/\s+/g, ''); const query = normalize(input.value); if (!query) { input.focus(); return; }
            const matches = window.shopProducts.filter(product => normalize(product.name).includes(query));
            if (matches.length === 1) { location.href = `./purchase.html?product=${encodeURIComponent(matches[0].id)}`; return; }
            results.replaceChildren();
            if (!matches.length) { results.innerHTML = '<p class="shop-empty">검색 결과가 없습니다.<br><span>다른 검색어로 다시 검색해보세요.</span></p>'; return; }
            matches.forEach(product => { const link = document.createElement('a'); link.className = 'shop-search-result'; link.href = `./purchase.html?product=${encodeURIComponent(product.id)}`; const img = document.createElement('img'); img.src = product.image; img.alt = ''; const name = document.createElement('span'); name.textContent = product.name; link.append(img, name); results.append(link); });
        });
    }
    document.querySelectorAll('.user-menu a').forEach(link => {
        const image = link.querySelector('img'); const alt = image?.alt || '';
        if (alt.includes('로그인')) { link.href = './login.html'; return; }
        if (alt.includes('검색')) { setupSearch(link); return; }
        if (alt.includes('장바구니')) {
            link.href = '#shopping-cart'; link.setAttribute('aria-haspopup', 'dialog');
            link.addEventListener('click', event => { event.preventDefault(); window.shopCart.open(); });
        }
    });
})();
