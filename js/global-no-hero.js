jQuery(document).ready(function($) {
    var subnav = $('.subnav'), 
    body = $('body'), 
    topMenuH = 0,
    scroolStop = 0, 
    popup = $('#popup');
  
  $('.hamburger').click(function(e) {
    e.preventDefault();
    $('body').toggleClass('mobile-nav-opened');
  });
  $('.main-mobile-nav-container').find('.has-sub a').off('click').on('click', function(e){
    e.preventDefault();
    $(this).closest('li').toggleClass('expanded');
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
