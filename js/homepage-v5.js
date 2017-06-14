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

(function ($) {
    var defaults = {
            width: 'auto',
            height: 400,
            transitionDuration: 500,
            autoPlayDuration: 5000,
            autoPlayPaused: false, 
            autoPlay: true
        },
        settings, container, viewport, slidesContainer, slides, slideW, slideH, totalSlides,
        currentSlide = 1;

    var prepareStage = function () {
            viewport.css({
                'width': slideW,
                'height': slideH
            });

            slidesContainer.css({
                'width': slideW * totalSlides
            });

            slides.css({
                'width': slideW
            });
        },
        cloneSlides = function () {
            slides.first().clone().addClass('first-slide').appendTo(slidesContainer);
            slides.last().clone().addClass('last-slide').prependTo(slidesContainer);
        },
        normalizeWindowW = function () {
            var windowW = $(window).width();
            return windowW;
            if (window.navigator.userAgent.indexOf('Macintosh') != -1) {
                windowW += 15;
            }
        },
        setupControls = function () {
            // navigation
            var slideNav = $('<div class="xs-slider-nav"><a href="#" class="prev">Previous</a><a href="#" class="next">Next</a></div>');
            // viewport.append(slideNav);

            slideNav.find('a').on('click', function () {
                container.addClass('nav-blocked');
                if ($(this).hasClass('prev')) {
                    currentSlide -= 1;
                } else {
                    currentSlide += 1;
                }
                moveStage();
            });

            // indicators
            var slideIndicators = $('<div class="xs-slider-indicators"></div>');
            for (var i = 1; i < totalSlides - 1; i++) {
                var helperClass = (i == 1) ? 'active' : '';
                var indicatorMarkup = $('<a href="#" class="indicator ' + helperClass + '" id="indicator-' + i + '" data-slide-pos="' + i + '"></a>');
                slideIndicators.append(indicatorMarkup).appendTo(container);
            }

            slideIndicators.find('a').on('click', function (e) {
                e.preventDefault();
                currentSlide = parseInt($(this).data('slidePos'));
                moveStage();
            });

            slideIndicators.hover(function() {
                settings.autoPlayPaused = true;
            }, function() {
                settings.autoPlayPaused = false;
            });
        },
        moveStage = function () {
            var distance = -(currentSlide * slideW);
            slidesContainer.transit({
                x: distance
            }, settings.transitionDuration, function () {
                container.removeClass('nav-blocked touch-blocked');
                if (currentSlide == totalSlides - 1) {
                    jumpToSlide(1);
                }
                if (currentSlide == 0) {
                    jumpToSlide(totalSlides - 2);
                }
            });
            activeIndicator();
        },
        jumpToSlide = function (pos) {
            currentSlide = pos || currentSlide;
            var distance = -(currentSlide * slideW);

            slidesContainer.transit({
                x: distance
            }, 0);
        },
        activeIndicator = function () {
            var activeSlide;
            if (currentSlide == 0) {
                activeSlide = autoPlayDuration;
            } else if (currentSlide == totalSlides - 1) {
                activeSlide = 1;                
            } else {
                activeSlide = currentSlide;
            }

            $('.indicator').removeClass('active');
            $('#indicator-' + activeSlide).addClass('active');
            $('.how-block .content ul li').removeClass('active');
            $($('.how-block .content ul li').get(activeSlide-1)).addClass('active');
        },
        initTouchEvents = function () {
            var longTouch = false,
                touchStartX, touchMoveX, moveX;

            slidesContainer.on('touchstart', function (event) {
                settings.autoPlayPaused = true;
                window.setTimeout(function () {
                    longTouch = true;
                }, 250);
                touchStartX = event.originalEvent.touches[0].pageX;
            });

            slidesContainer.on('touchmove', function (event) {
                touchMoveX = event.originalEvent.touches[0].pageX;
                moveX = currentSlide * slideW + (touchStartX - touchMoveX);
                if (Math.abs(touchStartX - touchMoveX) > 5) {
                    event.preventDefault();
                }
                slidesContainer.css('transform', 'translate(-' + moveX + 'px,0,0)');
            });
            slidesContainer.on('touchend', function (event) {
                container.addClass('touch-blocked');
                settings.autoPlayPaused = false;
                var absMove = Math.abs(currentSlide * slideW - moveX);
                if (absMove > slideW / 6 || longTouch === false) {
                    if ((moveX > currentSlide * slideW)) {
                        currentSlide++;
                    } else if ((moveX < currentSlide * slideW)) {
                        currentSlide--;
                    }
                }
                moveStage();
            });
        },
        initEvents = function () {
            viewport.hover(function () {
                settings.autoPlayPaused = true;
            }, function () {
                settings.autoPlayPaused = false;
            });
        },
        autoPlay = function () {
            window.setTimeout(function () {
                autoPlay();
                if (!settings.autoPlayPaused) {
                    currentSlide += 1;
                    moveStage();
                }
            }, settings.autoPlayDuration);
        },
        init = function (element) {
            container = element;
            viewport = element.find('.viewport');
            slidesContainer = element.find('.slides-container');

            slides = element.find('.slide');
            cloneSlides();
            slides = element.find('.slide');
            slideW = (settings.width == 'auto') ? normalizeWindowW() : settings.width;
            slideH = (settings.height == 'auto') ? $(window).height() : settings.height;
            totalSlides = slides.length;

            prepareStage();
            setupControls();
            jumpToSlide();
            initEvents();
            initTouchEvents();

            $(window).on('resize', function () {
                window.setTimeout(function () {
                    slideW = (settings.width == 'auto') ? normalizeWindowW() : settings.width;
                    slideH = (settings.height == 'auto') ? $(window).height() : settings.height;

                    prepareStage();
                    jumpToSlide();
                }, 200);
            }).trigger('resize');

            if (settings.autoPlay){
                autoPlay();
            }
        }

    $.fn.xsSlider = function (options) {
        settings = $.extend(true, defaults, options);

        init(this);
    }
}(jQuery));