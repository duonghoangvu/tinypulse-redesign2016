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
  $('.main-mobile-nav-container').find('.has-sub a').off('click').on('click', function(e){
    e.preventDefault();
    $(this).closest('li').toggleClass('expanded');
  });

  var hash = window.location.hash;
  if ($(hash).length > 0){
    window.setTimeout(function(){
        $(window).trigger('hashchange');
    }, 500)
  }
  $('.title').each(function(){
    if(this.offsetHeight < this.scrollHeight) {
      $(this).parent().append('<div class="tooltip">'+ $(this).text() +'</div>');
    }
  });
  $('.title').mouseenter(function(){
    $(this).parent().find('.tooltip').attr('style', 'display: block');
  });
  $('.title').mouseout(function(){
    $(this).parent().find('.tooltip').attr('style', 'display:none');
  });

  $(window).on('resize', function(){
    topMenuH = ($(window).width() >= 960) ? 76 : 0;
    scrollStop = ($(window).width() >= 960) ? 121 : 40;

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
      if ($(this).data('content')){
        e.preventDefault();
        $('.subnav li').removeClass('active');
        $(this).closest('li').addClass('active');
        $('#sub-nav-trigger').trigger('click');
        var content = $(this).data('content'), 
          block = $('[data-block=' + content + ']').filter(':visible');
        if (block.length > 0){
          scrollTo(block);      
        }        
      }
    });
    // alert($(window).height());
  }).on('scroll', function(){
    var scrollTop = $(window).scrollTop();
    // *********************************************** subnav
    if (subnav.length > 0){
      if (scrollTop + topMenuH >= subnav.offset().top){
        body.addClass('subnav-sticked');
      } else {
        body.removeClass('subnav-sticked');
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
  }).on('hashchange', function(e){
    var hash = window.location.hash;
      if ($(hash).length > 0){
        scrollStop = ($(window).width() >= 960) ? 71 : 40;
        var ele = $(hash);
        window.setTimeout(function(){
            $('body, html').animate({
                scrollTop: ele.offset().top - scrollStop
            }, 750);
        }, 500);
      }
  }).trigger('resize');

  if (window.localStorage){
    if (!localStorage.hidePopup){
      window.setTimeout(function(){
        popup.fadeIn(150);
      }, 2000);
    }    
  }

  popup.find('.overlay').on('click', function(){
    popup.fadeOut(300);
  });
  popup.find('.close-btn').on('click', function(){
    localStorage.setItem('hidePopup', 'true');
    popup.fadeOut(300);
    return false;
  });

  var scroller = new Scroller();
  scroller.dom.blur = $('header .overlay');
  scroller.dom.nav = $('header .main-nav-container');
  scroller.dom.mobileNav = $('.main-mobile-nav-container');
  scroller.wHeight = $('.header-graphics').height();
  scroller.init();

  var scrollTo = function(sel){
    var ele = $(sel);
    $('body, html').animate({
      scrollTop: ele.offset().top - scrollStop
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
    this.latestKnownScrollY = window.pageYOffset;
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
    if (currentScrollY >= this.wHeight - 150){
      this.dom.nav.addClass('sticked');
      this.dom.mobileNav.addClass('sticked');
    } else {
      this.dom.nav.removeClass('sticked');      
      this.dom.mobileNav.removeClass('sticked');      
    }

    if ($(window).width() < 960){
      return;
    }

    var slowScroll = (currentScrollY - ($(window).height() + 300)) / 4
      , blurScroll = currentScrollY * 1.5;

    this.dom.blur.css({
      'opacity' : blurScroll / this.wHeight
    });

    if (window.location.pathname === '/' || window.location.pathname === '/redesign-2016-homepagezaqwsxcderfv'){
      $('.masked-image-2').css({
        'transform': 'translateY(-' + slowScroll + 'px)'
      });

      if (currentScrollY + 76 < $('.text-2').offset().top){
        $('.masked-image-1').css({
          'transform': 'translateY(-' + slowScroll/2 + 'px)'
        });      
      }      
    }
  }
};
