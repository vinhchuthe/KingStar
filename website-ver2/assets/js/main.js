$(document).ready(function () {

    const swiper3 = new Swiper('#case-img', {
        // Optional parameters
        loop: true,
        allowTouchMove: false,
        observer: true,
        observeParents: true,

    });
    const swiper4 = new Swiper('#case-text', {
        // Optional parameters
        loop: true,
        // effect: 'fade',
        speed: 1000,
        longSwipesRatio: 0.01,
        followFinger: false,
        observer: true,
        observeParents: true,
        grabCursor: true,
        navigation: {
            nextEl: '.v-swiper-button-next',
            prevEl: '.v-swiper-button-prev',
        }
    });

    swiper4.controller.control = swiper3;

    const swiper1 = new Swiper('#logo1', {
        // Optional parameters
        loop: true,
        slidesPerView: 3,
        // spaceBetween: 20,
        observer: true,
        observeParents: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
    const swiper2 = new Swiper('#logo2', {
        // Optional parameters
        loop: true,
        slidesPerView: 3,
        observer: true,
        observeParents: true,
        // spaceBetween: 20,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });


    const swiper5 = new Swiper('#brand-slide', {
        // Optional parameters
        loop: true,
        slidesPerView: 3,
        observer: true,
        observeParents: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            900: {
                slidesPerView: 5,
            },
        }
    });

    const swiper6 = new Swiper('#social-slide', {
        // Optional parameters
        loop: true,
        slidesPerView: 3,
        observer: true,
        observeParents: true,
        spaceBetween: 10,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            1024: {
                slidesPerView: 5,
            },
            1600: {
                slidesPerView: 6,
            },
        }
    });

    $('#homeTab a').on('click', function (event) {
        event.preventDefault()
        $(this).tab('show')
    });

    $('#contestTab a').on('click', function (event) {
        event.preventDefault()
        $(this).tab('show')
    })

    $("#contact-link").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(document).height()
        }, 'slow');
        return false;
    });
});

if ($(window).width() >= 768) {
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);
}

