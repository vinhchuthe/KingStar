$(document).ready(function () {

    const swiper3 = new Swiper('#case-img', {
        // Optional parameters
        loop: true,
        allowTouchMove: false,

    });
    const swiper4 = new Swiper('#case-text', {
        // Optional parameters
        loop: true,
        // effect: 'fade',
        speed: 1000,
        longSwipesRatio: 0.01,
        followFinger: false,
        grabCursor: true,
        navigation: {
            nextEl: '.swiper-button-next',
        }
    });

    swiper4.controller.control = swiper3;

    const swiper1 = new Swiper('#logo1', {
        // Optional parameters
        loop: true,
        slidesPerView: 3,
        spaceBetween: 20,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
    const swiper2 = new Swiper('#logo2', {
        // Optional parameters
        loop: true,
        slidesPerView: 3,
        spaceBetween: 20,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });


    const swiper5 = new Swiper('#brand-slide', {
        // Optional parameters
        loop: true,
        slidesPerView: 5,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });

    const swiper6 = new Swiper('#social-slide', {
        // Optional parameters
        loop: true,
        slidesPerView: 4,
        spaceBetween: 20,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });

    var height = $(".v-tab-content .content-active").outerHeight(true);
    $(".v-tab-content").height(height);

    $(".v-tab .tab-item").click(function () {
        var data = $(this).attr('data-id');
        $(".v-tab .tab-item").removeClass('tab-active');
        $(".v-tab-content .tab-content").removeClass("content-active");
        $(".v-tab-content .tab-content").removeClass("reveal");
        $(this).addClass('tab-active');
        $("#" + data).addClass('reveal');

        setTimeout(function () {
            $("#" + data).addClass('content-active');
            var height = $(".v-tab-content .content-active").outerHeight(true);
            $(".v-tab-content").height(height);
        }, 200);
    });

    $("#contact-link").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(document).height()
        }, 'slow');
        return false;
    });
});