var win = $(window);
var leftbloom = $('.home-left-bloom');
var rightbloom = $('.home-right-bloom');
var discover = $('.home-discover');
var vertline = $('.vertical-line');
var nav = $('.side-nav');
var banText = $('.banner-text');
var psli = $('.products-submenu-li');
var smlogo = $('.sub-menu-logo-container');
var toTopBtn = $('.back-to-top');
var mobileHandle = $('.mobile-handle');
var sideNav = $('.side-nav');
var mobileNav = $('.mobile-navbar');
var mobileClose = $('.mobile-close-handle');
var mobileNavLogo = $('.mobile-navbar-logo ');
var subNav = $('.sub-menu');
//var subNavHandle =$('.has-submenu');
var subNavHandle =$('#menu-item-18');

subNav.hide();
subNavHandle.on('click', function(e){
  e.preventDefault();
  var effect = 'slide';
  var options = { direction: 'right' };
  var duration = 500;
  subNav.animate({width: 'toggle'}, 300);
})

$(document).ready(function(){
  $('.home-products-slider').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
  arrows: false,
  });
});

$('.back-to-top').hide();
win.on('scroll', function(){
  if(win.scrollTop() > 600){
    $('.back-to-top').show();
  }
  else {
    $('.back-to-top').hide();
  }
});

if ($('.back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('.back-to-top').addClass('show');
            } else {
                $('.back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('.back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}
//subnav
var rotation = 0;
psli.hover(function(){

  rotation = rotation +30;
  smlogo.css('transform', 'rotate(' + rotation + 'deg)');
});
//subnav
//index-bloom
win.on('scroll', function(){
  if(win.scrollTop() > 500){
    rightbloom.addClass('jquery-right-bloom');
  }
  else {
    rightbloom.removeClass('jquery-right-bloom');
  }
});
win.on('scroll', function(){
  if(win.scrollTop() > 850){
    leftbloom.addClass('jquery-left-bloom');
  }
  else {
    leftbloom.removeClass('jquery-left-bloom');
  }
});
win.on('scroll', function(){
  if(win.scrollTop() > 1050){
    discover.addClass('jquery-discover');
    vertline.addClass('jquery-discover');
  }
  else {
    discover.removeClass('jquery-discover');
    vertline.removeClass('jquery-discover');
  }
});
//index-bloom
//banner-text
win.on('scroll', function(){
  var topscroll = win.scrollTop()/2;
  banText.css('transform', 'translateY(' + topscroll + 'px)');
  if(win.scrollTop() > 250){
    banText.addClass('jquery-banner-text');
  }
  else {
    banText.removeClass('jquery-banner-text');
  }
});
//banner-text

//mobile-handle
mobileHandle.on('click', function(){
  sideNav.toggleClass('jquery-side-nav');
  mobileHandle.toggleClass('jquery-mobile-handle');
});
mobileClose.on('click', function(){
  sideNav.toggleClass('jquery-side-nav');
  mobileHandle.toggleClass('jquery-mobile-handle');
  subNav.animate({width: 'remove'}, 300);
});
win.on('scroll', function(){
  if(win.scrollTop() > 80){
    mobileNavLogo.addClass('jquery-mobile-nav-logo');
    mobileNav.addClass('jquery-mobile-nav-scroll');
  }
  else {
    mobileNav.removeClass('jquery-mobile-nav-scroll');
    mobileNavLogo.removeClass('jquery-mobile-nav-logo');
  }
});

sideNav.on("swipeleft", function(){
  sideNav.toggleClass('jquery-side-nav');
  mobileHandle.toggleClass('jquery-mobile-handle');
  console.log("asd");
})
