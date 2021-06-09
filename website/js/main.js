AOS.init();

// Home
const swiper1 = new Swiper('#b2-slider', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
});

const swiper2 = new Swiper('#b4-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    // // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
});

const swiper3 = new Swiper('#brand-slider1', {
    // Optional parameters
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    // // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
});

const swiper4 = new Swiper('#brand-slider2', {
    // Optional parameters
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    // // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
});

$(document).ready(function () {
    $("#contact-link").click(function () {
        $("html, body").animate({
            scrollTop: $(document).height()
        }, 1000);
    });

    $("#join-link").click(function () {
        window.location.replace("./index.html#join-form");
    });

    $("#fixed-cta").click(function () {
        window.location.replace("./index.html#join-form");
    });
});