const pageFooter = document.querySelector('footer');
if (pageFooter && !pageFooter.querySelector('.back-to-top')) {
    const topButton = document.createElement('button');
    topButton.type = 'button';
    topButton.className = 'back-to-top';
    topButton.setAttribute('aria-label', '페이지 맨 위로 이동');
    topButton.title = '위로 가기';
    topButton.textContent = '↑';
    topButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
        });
    });
    pageFooter.append(topButton);
}

const openButton = document.querySelector(".btn-menu button");
const closeButton = document.querySelector(".btn-menu-close button");
const overlay = document.querySelector(".smart-overlay-menu");
const depthButtons = [...document.querySelectorAll(".smart-depth-button")];
const depthPanels = [...document.querySelectorAll(".gnb2depth-smart")];

if (openButton && closeButton && overlay) {

    const clearDepth = () => {
        depthButtons.forEach((button) => {
            button.closest("li")?.classList.remove("on");
            button.setAttribute("aria-expanded", "false");
        });

        depthPanels.forEach((panel) => panel.classList.remove("on"));
    };

    const activateDepth = (menuName) => {
        depthButtons.forEach((button) => {
            const isActive = button.dataset.menu === menuName;

            button.closest("li")?.classList.toggle("on", isActive);
            button.setAttribute("aria-expanded", String(isActive));
        });

        depthPanels.forEach((panel) => {
            panel.classList.toggle("on", panel.dataset.depth === menuName);
        });
    };

    const openMenu = () => {
        overlay.classList.add("on");
        overlay.setAttribute("aria-hidden", "false");
        openButton.setAttribute("aria-expanded", "true");
        document.body.classList.add("menu-open");
        closeButton.focus();
    };

    const closeMenu = () => {
        overlay.classList.remove("on");
        overlay.setAttribute("aria-hidden", "true");
        openButton.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
        clearDepth();
        openButton.focus();
    };

    openButton.addEventListener("click", openMenu);
    closeButton.addEventListener("click", closeMenu);

    depthButtons.forEach((button) => {
        const menuItem = button.closest("li");
        const showDepth = () => activateDepth(button.dataset.menu);

        menuItem?.addEventListener("pointerenter", showDepth);
        button.addEventListener("focus", showDepth);
        button.addEventListener("click", showDepth);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && overlay.classList.contains("on")) {
            closeMenu();
        }
    });
}
