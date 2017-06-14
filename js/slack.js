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

function Scroller()
{
  this.latestKnownScrollY = 0;
  this.ticking            = false;
  this.wHeight            = 620;
  this.dom                = {
                              blur: '',
                              nav: '',
                              mobileNav: ''
                            }
}

Scroller.prototype = {
  init: function() {    
    window.addEventListener('scroll', this.onScroll.bind(this), false);
  },
  onScroll: function() {
    this.latestKnownScrollY = window.scrollY;
    this.requestTick();
  },
  requestTick: function() {
    if( !this.ticking ) {
      window.requestAnimFrame(this.update.bind(this));
    }
    this.ticking = true;
  },

  update: function() {
    var currentScrollY = this.latestKnownScrollY;
    this.ticking       = false;
    
    /**
     * Do The Dirty Work Here
     */
    if (currentScrollY >= this.wHeight){
      this.dom.nav.addClass('sticked');
      this.dom.mobileNav.addClass('sticked');
    } else {
      this.dom.nav.removeClass('sticked');      
      this.dom.mobileNav.removeClass('sticked');      
    }
  }
};