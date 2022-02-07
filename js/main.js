$(function () {
  $('.menu-btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.menu-btn').on('click', function () {
    $('.menu-btn').toggleClass('menu-btn--active');
  });

  $('.menu a').on('click', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $('.menu-btn').on('click', function () {
    $('body').toggleClass('body-hidden')
  });

  $('a[href^="#"').on('click', function () {

    let href = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(href).offset().top
    });
    return false;
  });

  var mixer = mixitup('.portfolio__content');

});
