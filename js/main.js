$(document).ready(function () {
    var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function() {
    document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible");
  });

  var player;
   $('.story-author__icon').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '100%',
      width: '100%',
      videoId: 'vkHJ0NG70lk',
        events: {
          'onReady': videoPlay,
        }
      });
    })

    function videoPlay(event) {
      event.target.playVideo();
    }

  var player;
   $('.history__icon--bg-1').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player-1', {
      height: '100%',
      width: '100%',
      videoId: 'vkHJ0NG70lk',
        events: {
          'onReady': videoPlay,
        }
      });
    })

    function videoPlay(event) {
      event.target.playVideo();
    }

  var player;
   $('.history__icon--bg-2').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player-2', {
      height: '100%',
      width: '100%',
      videoId: 'vkHJ0NG70lk',
        events: {
          'onReady': videoPlay,
        }
      });
    })

    function videoPlay(event) {
      event.target.playVideo();
    }

  var player;
   $('.history__icon--bg-3').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player-3', {
      height: '100%',
      width: '100%',
      videoId: 'vkHJ0NG70lk',
        events: {
          'onReady': videoPlay,
        }
      });
    })

    function videoPlay(event) {
      event.target.playVideo();
    }

    $('.single-item').slick({
      infinite: false,
      dots: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
	    {
	      breakpoint: 1300,
	      settings: {
	        slidesToShow: 4,
	      }
	    },
	    {
	      breakpoint: 1100,
	      settings: {
	        slidesToShow: 3,
	      }
	    },
      {
	      breakpoint: 900,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
      {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
	      }
	    },
    ]
    });


    $('.single-items').slick({
      infinite: false,
      dots: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
	    {
	      breakpoint: 1400,
	      settings: {
	        slidesToShow: 3,
	      }
	    },
	    {
	      breakpoint: 1070,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
      {
	      breakpoint: 992,
	      settings: {
          slidesToShow: 4,
	        slidesToScroll: 2,
          rows: 2,
	      }
	    },
      {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
	      }
	    },
    ]
    });

     $('.single-ite').slick({
      infinite: false,
      dots: false,
      rows: 2,
      slidesToShow: 2,
      slidesToScroll: 2,
    });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  var closeModalBackground = $(".modal__overlay");

  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  closeModalBackground.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  $(document).on('keydown', function (e) {
    if (e.which === 27) {
      var modalOverlay = $(".modal__overlay");
      var modalDialog = $(".modal__dialog");
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
    }
  });

  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Укажите ваше имя",
          minlength: "Введите ваше настоящее имя",
        },
        email: {
          required: "Укажите адрес электронной почты",
          email: "Формат name@domain.com",
        },
        phone: {
          required: "Укажите номер телефона",
          minlength: "Некорректный номер"
        },
      },
    });
  });

  $(".newsletter__subscribe").each(function () {
    $(this).validate({
      errorClass: "invalide",
      messages: {
        subscribe: {
          required: "Укажите адрес электронной почты",
          email: "Формат name@domain.com",
        },
      },
    });
  });

  $(".form").ready(function () {
    $('.modal__input--phone').mask('+7 (ZZZ) ZZZ-ZZ-ZZ', {
      translation: {
        'Z': {
          pattern: /[0-9]/, optional: true
        }
      }
    });
  });
  $(function() {
    $(window).scroll(function() {
  if($(this).scrollTop() != 0) {
    $('#toTop').fadeIn();
  } else {
    $('#toTop').fadeOut();
  }
  });
  $('#toTop').click(function() {
  $('body,html').animate({scrollTop:0},800);
  });
  });

  $(document).ready(function(){
       $( ".card-info__love" ).click(function() {
        if($(this).hasClass('iconHeartActive')) {
            $( this ).removeClass( "iconHeartActive" );
            $( this ).addClass( "iconHeartInactive" );
        } else {
            $( this ).removeClass( "iconHeartInactive" );
            $( this ).addClass( "iconHeartActive" );
        }

     });
 });
   
 $(document).ready(function(){
   $( ".history__note" ).click(function() {
     if($(this).hasClass('iconNoteActive')) {
       $( this ).removeClass( "iconNoteActive");
       $( this ).addClass( "iconNoteInactive");
        } else {
            $( this ).removeClass( "iconNoteInactive" );
            $( this ).addClass( "iconNoteActive" );
        }

     });
 });
 $(document).ready(function(){
   $("#menu").on("click", "a", function (event) {
     event.preventDefault();
     var id = $(this).attr("href"), top = $(id).offset().top;
     $("body, html").animate({scrollTop: top}, 1500);
     })
 })
});  