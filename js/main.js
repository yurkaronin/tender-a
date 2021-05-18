jQuery(document).ready(function() {

//анимация сендвича
jQuery('.nav-toggle').click(function(){
  jQuery('.header_nav').toggleClass('active');
  jQuery(this).toggleClass('active');
});


//Проверка на наличие класса
  jQuery('.accompanying_tabs__wr').click(function(){
    var accompanying = $( this ).attr('data-accompanying');
    if ( jQuery(this).hasClass("active") ) {
   $(this).addClass('hover');
      } else {
        
      }
  });

  jQuery('.accompanying_tabs__wr').hover(function(){
      var accompanying = $( this ).attr('data-accompanying');
    if ( jQuery(this).hasClass("hover") ) {
        $(this).removeClass('hover');
      } else {
        
        jQuery('.accompanying_tabs__wr, .accompanying_content__item').removeClass( "active" );
        jQuery( '.accompanying_content__item.' + accompanying + '' ).addClass( "active" );
        jQuery( this).addClass( "active" );
      }
  });

//Проверка на наличие класса
  jQuery('.specialists_item').click(function(){
    if ( jQuery(this).hasClass("hover") ) {
        $('.specialists_item').removeClass('hover');
      } else {
        $('.specialists_item').removeClass('hover');
        $(this).addClass('hover');
      }
  });

//фиксирование верхней навигации
var scrollPosDetect = function() {
  if ($(window).scrollTop() >= 100) {
   $(".header_nav, header").addClass('fixed');
  } else {
   $(".header_nav, header").removeClass('fixed');
  }
 };
 scrollPosDetect();
 $(window).scroll(scrollPosDetect);

//Активация слайдеров, добавление стрелок
  jQuery('.cases_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows:true,
    nextArrow: '<span class="nextArrow"></span>',
    prevArrow: '<span class="prevArrow"></span>',
    fade: true,
    cssEase: 'linear'
  });


  $('.analysis_slider').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    nextArrow: '<span class="nextArrow"></span>',
    prevArrow: '<span class="prevArrow"></span>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

//Запуск слайдера во вкладке
jQuery('.cases_nav__link').on('click', function(){
  jQuery('.cases_slider .nextArrow').trigger('click');
});

//якорное меню фиксированное
  jQuery('.header_nav__link').click(function(){
    jQuery('html, body').stop().animate({scrollTop: jQuery(jQuery(this).attr('href')).offset().top}, 2000);
    jQuery('.nav-toggle, .header_nav').removeClass('active');
    return false;
    var cl = jQuery(this).attr('class');
    jQuery('#ancor'+cl)
 });
 
 jQuery('.btn_cases').click(function(){
    jQuery('html, body').stop().animate({scrollTop: jQuery(jQuery(this).attr('href')).offset().top}, 2000);
    return false;
    jQuery('#video')
 });

});