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

jQuery(document).ready(function($) {
  var subnav = $('.subnav'), 
    body = $('body'),
    topMenuH = 0,
    scroolStop = 0, 
    popup = $('#popup'),
    leftImgHeight = $('.left-firstpage img').height(),
    windowW = $(window).width(),
    windowH = $(window).height();

  var marginTop = (windowH - leftImgHeight) < 0 ? (windowH - leftImgHeight) : 0
  $('.left-firstpage img').css('margin-top',marginTop);

  $('.hamburger').click(function(e) {
    e.preventDefault();
    $('body').toggleClass('mobile-nav-opened');
  });
  $('.main-mobile-nav-container').find('.has-sub a').off('click').on('click', function(e){
    e.preventDefault();
    $(this).closest('li').toggleClass('expanded');
  });
  var sumary = $('.startup-sumary');
  $(window).on('resize', function(){
    topMenuH = ($(window).width() >= 960) ? 76 : 0;
    scrollStop = ($(window).width() >= 960) ? 121 : 40;
    leftImgHeight = $('.left-firstpage img').height();
    windowH = $(window).height();
    var marginTop = (windowH - leftImgHeight) < 0 ? (windowH - leftImgHeight) : 0
    $('.left-firstpage img').css('margin-top',marginTop);

    if ($(window).width() < 960){
      $('#site-footer').find('ul li:first-child').off('click').on('click', function(e){
        $(this).closest('ul').toggleClass('expanded');
      });
      $('#sub-nav-trigger').off('click').on('click', function(e){
        e.preventDefault();
        $(this).closest('ul').toggleClass('expanded');
      });
    }
    $('.subnav').find('a:not(#sub-nav-trigger)').off('click').on('click', function(e){
      e.preventDefault();
      $('.subnav li').removeClass('active');
      $(this).closest('li').addClass('active');
      $('#sub-nav-trigger').trigger('click');
      var content = $(this).data('content'), 
        block = $('[data-block=' + content + ']').filter(':visible');
      if (block.length > 0){
        scrollTo(block);      
      }
    });
    // alert($(window).height());
  }).on('scroll', function(){
    var scrollTop = $(window).scrollTop();
    // *********************************************** subnav
    if (sumary.length > 0){
      if (scrollTop + 100 >= sumary.offset().top){
        if ($(window).width() < 960){
          $('.main-mobile-nav-container').attr('style', 'display:block');
        } else {
          $('.startup-wrapper header').attr('style', 'display:block');
        }
        //body.addClass('subnav-sticked');
      } else {
        if ($(window).width() < 960){
          $('.main-mobile-nav-container').attr('style', 'display:none');
        } else {
          $('.startup-wrapper header').attr('style', 'display:none');
        }
        //body.removeClass('subnav-sticked');
      }

      var blocks = $('[data-block]').filter(':visible');
      blocks.each(function(index, block){
          var currentBlock = $(block), 
              currentBlockTop = currentBlock.offset().top,
              currentBlockBottom = currentBlockTop + currentBlock.height();
          if (scrollTop + scrollStop >= currentBlockTop && scrollTop + scrollStop <= currentBlockBottom){
              var destinationBlock = currentBlock.attr('data-block');
              subnav.find('li').removeClass('active');
              subnav.find('[data-content=' + destinationBlock + ']').closest('li').addClass('active');
          }
      });      
    }
  }).trigger('resize');

  if (!localStorage.hidePopup){
    window.setTimeout(function(){
      popup.fadeIn(150);
    }, 2000);
  }

  popup.find('.overlay').on('click', function(){
    popup.fadeOut(300);
  });
  popup.find('.close-btn').on('click', function(){
    localStorage.setItem('hidePopup', 'true');
    popup.fadeOut(300);
    return false;
  });
  $('.scrolldown img').on('click',function(){
    $('html, body').animate({
      scrollTop: $('.startup-sumary').offset().top - 96
    }, 1000);
  });
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
