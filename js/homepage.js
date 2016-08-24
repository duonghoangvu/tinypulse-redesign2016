/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);

// jQuery Easing - Credit: http://gsgd.co.uk/sandbox/jquery/easing/
jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(n,e,t,u,a){return jQuery.easing[jQuery.easing.def](n,e,t,u,a)},easeInQuad:function(n,e,t,u,a){return u*(e/=a)*e+t},easeOutQuad:function(n,e,t,u,a){return-u*(e/=a)*(e-2)+t},easeInOutQuad:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e+t:-u/2*(--e*(e-2)-1)+t},easeInCubic:function(n,e,t,u,a){return u*(e/=a)*e*e+t},easeOutCubic:function(n,e,t,u,a){return u*((e=e/a-1)*e*e+1)+t},easeInOutCubic:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e*e+t:u/2*((e-=2)*e*e+2)+t},easeInQuart:function(n,e,t,u,a){return u*(e/=a)*e*e*e+t},easeOutQuart:function(n,e,t,u,a){return-u*((e=e/a-1)*e*e*e-1)+t},easeInOutQuart:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e*e*e+t:-u/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(n,e,t,u,a){return u*(e/=a)*e*e*e*e+t},easeOutQuint:function(n,e,t,u,a){return u*((e=e/a-1)*e*e*e*e+1)+t},easeInOutQuint:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e*e*e*e+t:u/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(n,e,t,u,a){return-u*Math.cos(e/a*(Math.PI/2))+u+t},easeOutSine:function(n,e,t,u,a){return u*Math.sin(e/a*(Math.PI/2))+t},easeInOutSine:function(n,e,t,u,a){return-u/2*(Math.cos(Math.PI*e/a)-1)+t},easeInExpo:function(n,e,t,u,a){return 0==e?t:u*Math.pow(2,10*(e/a-1))+t},easeOutExpo:function(n,e,t,u,a){return e==a?t+u:u*(-Math.pow(2,-10*e/a)+1)+t},easeInOutExpo:function(n,e,t,u,a){return 0==e?t:e==a?t+u:(e/=a/2)<1?u/2*Math.pow(2,10*(e-1))+t:u/2*(-Math.pow(2,-10*--e)+2)+t},easeInCirc:function(n,e,t,u,a){return-u*(Math.sqrt(1-(e/=a)*e)-1)+t},easeOutCirc:function(n,e,t,u,a){return u*Math.sqrt(1-(e=e/a-1)*e)+t},easeInOutCirc:function(n,e,t,u,a){return(e/=a/2)<1?-u/2*(Math.sqrt(1-e*e)-1)+t:u/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(n,e,t,u,a){var r=1.70158,i=0,s=u;if(0==e)return t;if(1==(e/=a))return t+u;if(i||(i=.3*a),s<Math.abs(u)){s=u;var r=i/4}else var r=i/(2*Math.PI)*Math.asin(u/s);return-(s*Math.pow(2,10*(e-=1))*Math.sin(2*(e*a-r)*Math.PI/i))+t},easeOutElastic:function(n,e,t,u,a){var r=1.70158,i=0,s=u;if(0==e)return t;if(1==(e/=a))return t+u;if(i||(i=.3*a),s<Math.abs(u)){s=u;var r=i/4}else var r=i/(2*Math.PI)*Math.asin(u/s);return s*Math.pow(2,-10*e)*Math.sin(2*(e*a-r)*Math.PI/i)+u+t},easeInOutElastic:function(n,e,t,u,a){var r=1.70158,i=0,s=u;if(0==e)return t;if(2==(e/=a/2))return t+u;if(i||(i=.3*a*1.5),s<Math.abs(u)){s=u;var r=i/4}else var r=i/(2*Math.PI)*Math.asin(u/s);return 1>e?-.5*s*Math.pow(2,10*(e-=1))*Math.sin(2*(e*a-r)*Math.PI/i)+t:s*Math.pow(2,-10*(e-=1))*Math.sin(2*(e*a-r)*Math.PI/i)*.5+u+t},easeInBack:function(n,e,t,u,a,r){return void 0==r&&(r=1.70158),u*(e/=a)*e*((r+1)*e-r)+t},easeOutBack:function(n,e,t,u,a,r){return void 0==r&&(r=1.70158),u*((e=e/a-1)*e*((r+1)*e+r)+1)+t},easeInOutBack:function(n,e,t,u,a,r){return void 0==r&&(r=1.70158),(e/=a/2)<1?u/2*e*e*(((r*=1.525)+1)*e-r)+t:u/2*((e-=2)*e*(((r*=1.525)+1)*e+r)+2)+t},easeInBounce:function(n,e,t,u,a){return u-jQuery.easing.easeOutBounce(n,a-e,0,u,a)+t},easeOutBounce:function(n,e,t,u,a){return(e/=a)<1/2.75?7.5625*u*e*e+t:2/2.75>e?u*(7.5625*(e-=1.5/2.75)*e+.75)+t:2.5/2.75>e?u*(7.5625*(e-=2.25/2.75)*e+.9375)+t:u*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(n,e,t,u,a){return a/2>e?.5*jQuery.easing.easeInBounce(n,2*e,0,u,a)+t:.5*jQuery.easing.easeOutBounce(n,2*e-a,0,u,a)+.5*u+t}});

$(document).ready(function(){
  var windowW = $(window).width(),
    windowH = $(window).height(),
    topMenuH = 76,
    productsBlock = $('#products'),
    calc,
    range = 200, 
    isFirefox = navigator.userAgent.indexOf('Firefox') != -1, 
    isiPad = navigator.userAgent.indexOf('iPad') != -1, 
    isTouchDevice = 'ontouchstart' in window;

  var maskedImagesContainer = productsBlock.find('.masked-images'),
    maskedImages = productsBlock.find('.masked-image');

  var initStage = function(){
    windowW = $(window).width();
    windowH = $(window).height();

    productsBlock.css('height', windowH*2).find('.content').css({
        'height': windowH
    });
    maskedImages.css({
        'height': windowH
    });
    maskedImages.find('div').css({
        'height': windowH
    });

    $('.masked-image-1').css({
      'top': '100px'
    });

    animationStartOffset = getStartOffset(productsBlock);
    animationStopOffset = getEndOffset(productsBlock);

    $(window).scroll();
  }, 
  getStartOffset = function(ele){
    ele = $(ele); 
    return ele.offset().top;
  }, 
  getEndOffset = function(ele){
    ele = $(ele);
    return (ele.offset().top + ele.height());
  };

  var animationStartOffset = getStartOffset(productsBlock), 
    animationStopOffset = getEndOffset(productsBlock);

  // =====================
  var _event = 'scroll';

  if (!isTouchDevice){
    initStage();            
  }

  if(isFirefox){
    $('body').addClass('firefox');
  }        

  if (!('ontouchstart' in window)){
    $(window)
    .on('resize', $.debounce(200, initStage))
    .on(_event, function(delta){
        if ($(window).width() < 960){
          return;
        }
        
        var scrollTop = $(window).scrollTop(), 
            windowH = $(window).height();

        if (scrollTop + topMenuH > animationStartOffset && scrollTop + windowH < animationStopOffset){
            maskedImagesContainer.css({
                'position': 'fixed',
                'top': topMenuH
            });
        } else {
            if (scrollTop + windowH >= animationStopOffset){
                maskedImagesContainer.css({
                    'position': 'absolute',
                    'top': windowH + topMenuH,
                });  
            } else {
                maskedImagesContainer.css({
                    'position': 'absolute',
                    'top': 0
                });    
            }                    
        }
        if (scrollTop + topMenuH > animationStartOffset && scrollTop + windowH < animationStopOffset + windowH){

            var index = ((scrollTop - animationStartOffset + windowH) / windowH).toString().substring(0, 1), 
                value = Math.abs(windowH - (scrollTop - animationStartOffset) + normalized);
                       
            if (value <= 30){
                productsBlock.css('background-color', '#A39D66');
            } else {
                productsBlock.css('background-color', '');
            }
            
            if (scrollTop + windowH > animationStopOffset){
                maskedImagesContainer.find('.masked-image-2').css({
                    'height': 0
                }); 
                productsBlock.css('background-color', '#65B0E5');
            } else {
                maskedImagesContainer.find('.masked-image-2').css({
                    'height': value
                }); 
            }

            contentOffsetTop = animationStartOffset + windowH;
            calc = 1 - ($(window).scrollTop() - contentOffsetTop + range) / range;

            if ( calc > '1' ) {
                calc = 1;
            } else if ( calc < '0' ) {
                calc = 0;
            }
        }
    })
    .on(_event, $.debounce(600, function(){
      if ($(window).width() < 960){
        return;
      }
      var scrollTop = $(window).scrollTop() - topMenuH + windowH/2, 
          contents = productsBlock.find('.content');

      contents.each(function(index, content){
          var currentContent = $(content), 
              currentContentTop = currentContent.offset().top,
              currentContentBottom = currentContentTop + currentContent.height(), 
              color = currentContent.data('color'), 
              text = currentContent.data('text');
          if (scrollTop > currentContentTop && scrollTop < currentContentBottom){
              $('body, html').animate({
                  scrollTop: currentContentTop,
              }, 500, 'easeOutQuad', function(){
                  productsBlock.css('background-color', color);
              });
          }
      });
    })).trigger('resize');
  }
  // =====================

  var normalized;
  function normalizeWheelSpeed(event) {
    if (event.wheelDelta) {
      normalized = (event.wheelDelta % 120 - 0) == -0 ? event.wheelDelta / 120 : event.wheelDelta / 12;
    } else {
      var rawAmmount = event.deltaY ? event.deltaY : event.detail;
      normalized = -(rawAmmount % 3 ? rawAmmount * 10 : rawAmmount / 3);
    }
    if (isFirefox){
      normalized = 0.5;
    }
  }
  window.addEventListener('mousewheel', normalizeWheelSpeed);
  window.addEventListener('DOMMouseScroll', normalizeWheelSpeed);
  window.addEventListener('wheel', normalizeWheelSpeed);
});
