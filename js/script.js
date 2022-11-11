let burger = document.querySelector('.burger-menu');
let menu = document.querySelector('.header__nav_mobile');
let menuLinks = document.querySelectorAll('.header__link_mobile');
let burgerMobile = document.querySelector('.burger__nav_mobile');

burger.addEventListener('click', function () {
  menu.classList.add('header__nav_mobile-active');
  document.querySelector('.section__background').style.display = 'block';
});

burgerMobile.addEventListener('click', function () {
  menu.classList.remove('header__nav_mobile-active');
  document.querySelector('.section__background').style.display = 'none';
});

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    menu.classList.remove('header__nav_mobile-active');
    document.querySelector('.section__background').style.display = 'none';
  });
});

// START FORM FEEDBACK

let contentForm = document.querySelector('.content-form');
let buttonCloseForm = document.querySelector('.button__close_form');
// let sendForm = document.querySelector('.form-btn-send');

document.querySelectorAll('.feedback__button').forEach(function (elem) {
  elem.addEventListener('click', function () {
    contentForm.classList.add('feedback__form');
  });
  buttonCloseForm.addEventListener('click', function () {
    contentForm.classList.remove('feedback__form');
  });
});
// END FORM FEEDBACK

// START FORM

$(function () {
  $('#send-form-call').submit(function () {
    $.ajax({
      type: 'POST',
      url: 'send-call.php',
      data: $(this).serialize(),
    }).done(function () {
      $('.contacts__message')
        .addClass('active-form')
        .css('display', 'flex')
        .hide()
        .fadeIn();
      $('.feedback__form')
        .hide()
        .fadeIn()
      setTimeout(function () {
        jQuery('#send-form-call').trigger('reset');
        $('.contacts__message').removeClass('active-form').fadeOut();
        $('.content-form').removeClass('feedback__form').fadeOut();
      }, 3000);
    });
    return false;
  });
});

$(function () {
  $('#send-form-request').submit(function () {
    $.ajax({
      type: 'POST',
      url: 'send-request.php',
      data: $(this).serialize(),
    }).done(function () {
      $('.contacts__message_request')
        .addClass('active-form-request')
        .css('display', 'flex')
        .hide()
        .fadeIn();
      setTimeout(function () {
        jQuery('#send-form-request').trigger('reset');
        $('.contacts__message_request').removeClass('active-form-request').fadeOut();
      }, 3000);
    });
    return false;
  });
});

// END FORM SEND MAIL

// start scrollUp

let toTop = function () {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    window.scrollBy(0, -50);
    setTimeout(toTop, 10);
  }
};

window.onscroll = function () {
  let scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled > 400) {
    document.querySelector('.scrollup').style.display = 'block';
  } else {
    document.querySelector('.scrollup').style.display = 'none';
  }
};
// end scrollUp

// start lightbox change default options

lightbox.option({
  showImageNumberLabel: false,
  wrapAround: true,
  disableScrolling: true,
});

// end lightbox change default options
