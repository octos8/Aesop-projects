const SwiperClass = window.Swiper;

if (typeof SwiperClass !== 'function') {
    console.warn('Swiper를 불러오지 못했습니다. CDN 연결 상태를 확인해주세요.');
} else {

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const heroElement = document.querySelector('[data-hero-swiper]');
    const campaignElement = document.querySelector('[data-campaign-swiper]');
    const productElement = document.querySelector('[data-product-swiper]');

    if (heroElement) {
        new SwiperClass(heroElement, {
            loop: true,
            speed: prefersReducedMotion ? 0 : 900,
            grabCursor: true,
            keyboard: {
                enabled: true,
            },
            autoplay: prefersReducedMotion ? false : {
                delay: 4500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            pagination: {
                el: heroElement.querySelector('.home-hero-pagination'),
                clickable: true,
            },
            a11y: {
                prevSlideMessage: '이전 메인 배너',
                nextSlideMessage: '다음 메인 배너',
                paginationBulletMessage: '{{index}}번째 메인 배너로 이동',
            },
        });
    }

    if (campaignElement) {
        new SwiperClass(campaignElement, {
            loop: true,
            speed: prefersReducedMotion ? 0 : 700,
            keyboard: {
                enabled: true,
            },
            navigation: {
                prevEl: campaignElement.querySelector('.campaign-prev'),
                nextEl: campaignElement.querySelector('.campaign-next'),
            },
            a11y: {
                prevSlideMessage: '이전 추천 컬렉션',
                nextSlideMessage: '다음 추천 컬렉션',
            },
        });
    }

    if (productElement) {
        new SwiperClass(productElement, {
            slidesPerView: 'auto',
            spaceBetween: 16,
            speed: prefersReducedMotion ? 0 : 650,
            grabCursor: true,
            freeMode: {
                enabled: true,
                momentum: !prefersReducedMotion,
            },
            keyboard: {
                enabled: true,
            },
            scrollbar: {
                el: productElement.querySelector('.featured-scrollbar'),
                draggable: true,
            },
            breakpoints: {
                769: {
                    spaceBetween: 32,
                },
                1280: {
                    spaceBetween: 48,
                },
            },
            a11y: {
                prevSlideMessage: '이전 신제품',
                nextSlideMessage: '다음 신제품',
            },
        });
    }
}
