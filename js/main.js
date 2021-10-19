$(document).ready(function () {
    const menuButton = $(".plate");
    const menuItemButton = $(".header__menu-item");
    const body = $("html");
    const prevArrow = $(".slider__button-prev");
    const nextArrow = $(".slider__button-next");
    const unpublishedPrev = $(".unpublished__button-prev");
    const unpublishedNext = $(".unpublished__button-next");
    menuButton.on("click", function () {
        this.classList.toggle("active");
        $(".header__mobile").toggleClass("header__mobile--visible");
        body.toggleClass("hidden-scroll");
    });
    menuItemButton.on("click", function () {
        menuButton.removeClass("active");
        $(".header__mobile").removeClass("header__mobile--visible");
        body.removeClass("hidden-scroll");
    });
    $(".recommendation__button img").on("click", function (e) {
        if ($(this).attr("src") === "img/heart.svg") {
            $(this).attr("src", "img/red-heart.svg");
        } else {
            $(this).attr("src", "img/heart.svg");
        }
    });
    $('a[href^="#"]').click(function () {
        let anchor = $(this).attr("href");
        $("html, body").animate(
            {
                scrollTop: $(anchor).offset().top,
            },
            600,
        );
    });
    $(".carousel").slick({
        slidesToShow: 4,
        infinite: false,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
        prevArrow: prevArrow,
        nextArrow: nextArrow,
        asNavFor: ".slide-adaptive",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 645,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    });
    $(".slide-adaptive").slick({
        slidesToShow: 4,
        infinite: false,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        arrows: false,
        asNavFor: ".carousel",
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 645,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    });
    $(".unpublished__books").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: unpublishedPrev,
        nextArrow: unpublishedNext,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1164,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1026,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 783,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
    let player;
    $(".video-play").on("click", function onYouTubeIframeAPIReady() {
        player = new YT.Player("player", {
            width: "100%",
            videoId: "4EoUz39nPMM",
            events: {
                onReady: videoPlay,
            },
        });

        function videoPlay(event) {
            event.target.playVideo();
        }
    });
    $("#play1").on("click", function onYouTubeIframeAPIReady() {
        player = new YT.Player("playerSmall", {
            width: "100%",
            videoId: "4EoUz39nPMM",
            events: {
                onReady: videoPlay,
            },
        });
        function videoPlay(event) {
            event.target.playVideo();
        }
    });
    $("#play2").on("click", function onYouTubeIframeAPIReady() {
        player = new YT.Player("playerSmall2", {
            width: "100%",
            videoId: "4EoUz39nPMM",
            events: {
                onReady: videoPlay,
            },
        });
        function videoPlay(event) {
            event.target.playVideo();
        }
    });
    $("#play3").on("click", function onYouTubeIframeAPIReady() {
        player = new YT.Player("playerSmall3", {
            width: "100%",
            videoId: "4EoUz39nPMM",
            events: {
                onReady: videoPlay,
            },
        });
        function videoPlay(event) {
            event.target.playVideo();
        }
    });
    const modalButton = $("[data-toggle=modal]");
    const closeModalButton = $(".modal__close");
    modalButton.on("click", openModal);
    closeModalButton.on("click", closeModal);

    const modalOverlay = $(".modal__overlay");
    const modalDialog = $(".modal__dialog");
    modalOverlay.on("click", closeModal);

    const form = $(".form");

    function openModal(event) {
        event.preventDefault();
        modalOverlay.addClass("modal__overlay--visible");
        modalDialog.addClass("modal__dialog--visible");
        body.addClass("hidden-scroll");
    }

    function closeModal(event) {
        event.preventDefault();
        modalOverlay.removeClass("modal__overlay--visible");
        modalDialog.removeClass("modal__dialog--visible");
        if (!menuButton.attr("class").includes("active")) {
            body.removeClass("hidden-scroll");
        }
    }
    document.addEventListener("keydown", (event) => {
        if (event.code === "Escape") {
            modalOverlay.removeClass("modal__overlay--visible");
            modalDialog.removeClass("modal__dialog--visible");
            if (!menuButton.attr("class").includes("active")) {
                body.removeClass("hidden-scroll");
            }
        }
    });
    window.addEventListener("resize", (event) => {
        if (body.width() <= 340) {
            $(".video-big").attr("src", "./img/video1-mini.jpg");
            $("#video-small").attr("src", "./img/video2-mini.jpg");
            $("#video-small2").attr("src", "./img/video3-mini.jpg");
        } else {
            $(".video-big").attr("src", "./img/video1.png");
            $("#video-small").attr("src", "./img/video2.png");
            $("#video-small2").attr("src", "./img/video3.png");
        }
    });
    if (body.width() <= 340) {
        $(".video-big").attr("src", "./img/video1-mini.jpg");
        $("#video-small").attr("src", "./img/video2-mini.jpg");
        $("#video-small2").attr("src", "./img/video3-mini.jpg");
    } else {
        $(".video-big").attr("src", "./img/video1.png");
        $("#video-small").attr("src", "./img/video2.png");
        $("#video-small2").attr("src", "./img/video3.png");
    }
    // Обработка форм
    form.each(function () {
        $(this).validate({
            errorClass: "invalid",
            messages: {
                name: {
                    required: "Пожалуйста, укажите ваше имя",
                    minlength: "Имя должно быть не короче 2 букв.",
                },
                email: {
                    required:
                        "Нам нужен ваш адрес электронной почты, чтобы с вами связаться",
                    email: "Ваш адрес электронной почты должен быть в формате name@domain.com.",
                },
                phone: {
                    required: "Телефон обязателен",
                    minlength: "Вы должны ввести 10 цифр номера",
                },
            },
        });
    });
    $("input[name*='phone']").mask("+7(999) 999-9999");

    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() != 0) {
                $(".toTop").fadeIn();
            } else {
                $(".toTop").fadeOut();
            }
        });

        $(".toTop").click(function () {
            $("body,html").animate({ scrollTop: 0 }, 800);
        });
    });
});
