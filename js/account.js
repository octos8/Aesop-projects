(() => {
    const form = document.querySelector('.account-form');
    const status = document.querySelector('.account-status');
    const tabs = [...document.querySelectorAll('[data-mode]')];
    function activate(mode) {
        const signup = mode === 'signup';
        tabs.forEach(tab => { const active = tab.dataset.mode === mode; tab.setAttribute('aria-selected', String(active)); tab.tabIndex = active ? 0 : -1; });
        document.querySelector('h1').textContent = signup ? '회원가입' : '로그인';
        document.title = `${signup ? '회원가입' : '로그인'} | Aesop`;
        document.querySelector('#account-panel').setAttribute('aria-labelledby', `${mode}-tab`);
        form.querySelectorAll('[data-signup]').forEach(label => { label.hidden = !signup; const input = label.querySelector('input'); input.disabled = !signup; input.required = signup; });
        form.elements.password.autocomplete = signup ? 'new-password' : 'current-password';
        form.elements.confirm.setCustomValidity('');
        form.querySelector('button[type="submit"]').textContent = signup ? '회원가입' : '로그인';
        status.textContent = '현재 계정 서비스 연결을 준비 중입니다.';
        history.replaceState(null, '', signup ? './login.html?mode=signup' : './login.html');
    }
    tabs.forEach(tab => { tab.addEventListener('click', () => activate(tab.dataset.mode)); tab.addEventListener('keydown', event => { if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) { event.preventDefault(); const target = event.key === 'Home' ? tabs[0] : event.key === 'End' ? tabs[1] : tabs.find(item => item !== tab); activate(target.dataset.mode); target.focus(); } }); });
    const validateConfirm = () => form.elements.confirm.setCustomValidity(!form.elements.confirm.disabled && form.elements.confirm.value !== form.elements.password.value ? '비밀번호가 일치하지 않습니다.' : '');
    form.elements.confirm.addEventListener('input', validateConfirm);
    form.elements.password.addEventListener('input', validateConfirm);
    form.addEventListener('submit', event => { event.preventDefault(); validateConfirm(); if (!form.reportValidity()) return; status.textContent = '계정 서비스가 아직 연결되지 않아 요청을 처리할 수 없습니다. 입력하신 정보는 저장되지 않았습니다.'; });
    activate(new URLSearchParams(location.search).get('mode') === 'signup' ? 'signup' : 'login');
})();
