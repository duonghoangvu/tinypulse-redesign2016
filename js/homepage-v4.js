(function(t,e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else if(typeof exports==="object"){module.exports=e(require("jquery"))}else{e(t.jQuery)}})(this,function(t){t.transit={version:"0.9.12",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:true,useTransitionEnd:false};var e=document.createElement("div");var n={};function i(t){if(t in e.style)return t;var n=["Moz","Webkit","O","ms"];var i=t.charAt(0).toUpperCase()+t.substr(1);for(var r=0;r<n.length;++r){var s=n[r]+i;if(s in e.style){return s}}}function r(){e.style[n.transform]="";e.style[n.transform]="rotateY(90deg)";return e.style[n.transform]!==""}var s=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;n.transition=i("transition");n.transitionDelay=i("transitionDelay");n.transform=i("transform");n.transformOrigin=i("transformOrigin");n.filter=i("Filter");n.transform3d=r();var a={transition:"transitionend",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"};var o=n.transitionEnd=a[n.transition]||null;for(var u in n){if(n.hasOwnProperty(u)&&typeof t.support[u]==="undefined"){t.support[u]=n[u]}}e=null;t.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeInCubic:"cubic-bezier(.550,.055,.675,.190)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};t.cssHooks["transit:transform"]={get:function(e){return t(e).data("transform")||new f},set:function(e,i){var r=i;if(!(r instanceof f)){r=new f(r)}if(n.transform==="WebkitTransform"&&!s){e.style[n.transform]=r.toString(true)}else{e.style[n.transform]=r.toString()}t(e).data("transform",r)}};t.cssHooks.transform={set:t.cssHooks["transit:transform"].set};t.cssHooks.filter={get:function(t){return t.style[n.filter]},set:function(t,e){t.style[n.filter]=e}};if(t.fn.jquery<"1.8"){t.cssHooks.transformOrigin={get:function(t){return t.style[n.transformOrigin]},set:function(t,e){t.style[n.transformOrigin]=e}};t.cssHooks.transition={get:function(t){return t.style[n.transition]},set:function(t,e){t.style[n.transition]=e}}}p("scale");p("scaleX");p("scaleY");p("translate");p("rotate");p("rotateX");p("rotateY");p("rotate3d");p("perspective");p("skewX");p("skewY");p("x",true);p("y",true);function f(t){if(typeof t==="string"){this.parse(t)}return this}f.prototype={setFromString:function(t,e){var n=typeof e==="string"?e.split(","):e.constructor===Array?e:[e];n.unshift(t);f.prototype.set.apply(this,n)},set:function(t){var e=Array.prototype.slice.apply(arguments,[1]);if(this.setter[t]){this.setter[t].apply(this,e)}else{this[t]=e.join(",")}},get:function(t){if(this.getter[t]){return this.getter[t].apply(this)}else{return this[t]||0}},setter:{rotate:function(t){this.rotate=b(t,"deg")},rotateX:function(t){this.rotateX=b(t,"deg")},rotateY:function(t){this.rotateY=b(t,"deg")},scale:function(t,e){if(e===undefined){e=t}this.scale=t+","+e},skewX:function(t){this.skewX=b(t,"deg")},skewY:function(t){this.skewY=b(t,"deg")},perspective:function(t){this.perspective=b(t,"px")},x:function(t){this.set("translate",t,null)},y:function(t){this.set("translate",null,t)},translate:function(t,e){if(this._translateX===undefined){this._translateX=0}if(this._translateY===undefined){this._translateY=0}if(t!==null&&t!==undefined){this._translateX=b(t,"px")}if(e!==null&&e!==undefined){this._translateY=b(e,"px")}this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var t=(this.scale||"1,1").split(",");if(t[0]){t[0]=parseFloat(t[0])}if(t[1]){t[1]=parseFloat(t[1])}return t[0]===t[1]?t[0]:t},rotate3d:function(){var t=(this.rotate3d||"0,0,0,0deg").split(",");for(var e=0;e<=3;++e){if(t[e]){t[e]=parseFloat(t[e])}}if(t[3]){t[3]=b(t[3],"deg")}return t}},parse:function(t){var e=this;t.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(t,n,i){e.setFromString(n,i)})},toString:function(t){var e=[];for(var i in this){if(this.hasOwnProperty(i)){if(!n.transform3d&&(i==="rotateX"||i==="rotateY"||i==="perspective"||i==="transformOrigin")){continue}if(i[0]!=="_"){if(t&&i==="scale"){e.push(i+"3d("+this[i]+",1)")}else if(t&&i==="translate"){e.push(i+"3d("+this[i]+",0)")}else{e.push(i+"("+this[i]+")")}}}}return e.join(" ")}};function c(t,e,n){if(e===true){t.queue(n)}else if(e){t.queue(e,n)}else{t.each(function(){n.call(this)})}}function l(e){var i=[];t.each(e,function(e){e=t.camelCase(e);e=t.transit.propertyMap[e]||t.cssProps[e]||e;e=h(e);if(n[e])e=h(n[e]);if(t.inArray(e,i)===-1){i.push(e)}});return i}function d(e,n,i,r){var s=l(e);if(t.cssEase[i]){i=t.cssEase[i]}var a=""+y(n)+" "+i;if(parseInt(r,10)>0){a+=" "+y(r)}var o=[];t.each(s,function(t,e){o.push(e+" "+a)});return o.join(", ")}t.fn.transition=t.fn.transit=function(e,i,r,s){var a=this;var u=0;var f=true;var l=t.extend(true,{},e);if(typeof i==="function"){s=i;i=undefined}if(typeof i==="object"){r=i.easing;u=i.delay||0;f=typeof i.queue==="undefined"?true:i.queue;s=i.complete;i=i.duration}if(typeof r==="function"){s=r;r=undefined}if(typeof l.easing!=="undefined"){r=l.easing;delete l.easing}if(typeof l.duration!=="undefined"){i=l.duration;delete l.duration}if(typeof l.complete!=="undefined"){s=l.complete;delete l.complete}if(typeof l.queue!=="undefined"){f=l.queue;delete l.queue}if(typeof l.delay!=="undefined"){u=l.delay;delete l.delay}if(typeof i==="undefined"){i=t.fx.speeds._default}if(typeof r==="undefined"){r=t.cssEase._default}i=y(i);var p=d(l,i,r,u);var h=t.transit.enabled&&n.transition;var b=h?parseInt(i,10)+parseInt(u,10):0;if(b===0){var g=function(t){a.css(l);if(s){s.apply(a)}if(t){t()}};c(a,f,g);return a}var m={};var v=function(e){var i=false;var r=function(){if(i){a.unbind(o,r)}if(b>0){a.each(function(){this.style[n.transition]=m[this]||null})}if(typeof s==="function"){s.apply(a)}if(typeof e==="function"){e()}};if(b>0&&o&&t.transit.useTransitionEnd){i=true;a.bind(o,r)}else{window.setTimeout(r,b)}a.each(function(){if(b>0){this.style[n.transition]=p}t(this).css(l)})};var z=function(t){this.offsetWidth;v(t)};c(a,f,z);return this};function p(e,i){if(!i){t.cssNumber[e]=true}t.transit.propertyMap[e]=n.transform;t.cssHooks[e]={get:function(n){var i=t(n).css("transit:transform");return i.get(e)},set:function(n,i){var r=t(n).css("transit:transform");r.setFromString(e,i);t(n).css({"transit:transform":r})}}}function h(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function b(t,e){if(typeof t==="string"&&!t.match(/^[\-0-9\.]+$/)){return t}else{return""+t+e}}function y(e){var n=e;if(typeof n==="string"&&!n.match(/^[\-0-9\.]+/)){n=t.fx.speeds[n]||t.fx.speeds._default}return b(n,"ms")}t.transit.getTransitionValue=d;return t});

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

jQuery(document).ready(function($) {
    if ($(window).width() > 1400){
        $('.xs-slider').xsSlider({
            autoPlay: true,
            height: '400',
            width: '700',
            autoPlayDuration: 3000
        });
    } else if ($(window).width() > 960){
        $('.xs-slider').xsSlider({
            autoPlay: true,
            height: '300',
            width: '500',
            autoPlayDuration: 3000
        }); 
    } else {
        $('.xs-slider').xsSlider({
            autoPlay: true,
            height: '202',
            width: '300',
            autoPlayDuration: 3000
        });        
    }
});