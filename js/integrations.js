jQuery(document).ready(function($) {
    var subnav = $('.subnav'), 
    body = $('body'), 
    topMenuH = 0,
    scrollStop = 0, 
    popup = $('#popup');
  
  $('.hamburger').click(function(e) {
    e.preventDefault();
    $('body').toggleClass('mobile-nav-opened');
  });

  var scroller = new Scroller();
  scroller.dom.nav = $('header .main-nav-container');
  scroller.dom.mobileNav = $('.main-mobile-nav-container');
  scroller.wHeight = 73
  scroller.init();

  var scrollTo = function(sel){
    var ele = $(sel);
    $('body, html').animate({
      scrollTop: ele.offset().top - scrollStop + 1
    }, 750);
  }
});

window.requestAnimFrame = (function()
{
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();


