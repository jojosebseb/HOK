var win = $(window);
var leftbloom = $('.home-left-bloom');
var rightbloom = $('.home-right-bloom');
var discover = $('.home-discover');
var vertline = $('.vertical-line');
var nav = $('.side-nav');

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
