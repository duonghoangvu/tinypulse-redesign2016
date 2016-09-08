jQuery(document).ready(function($) {
  var scrollTo = function(ele){
    ele = $(ele);
    var scrollStop = ($(window).width() >= 960) ? 121 : 40;
    window.setTimeout(function(){
      $('body, html').animate({
        scrollTop: ele.offset().top - scrollStop
      }, 750);  
    }, 500);
  };

  $('a[href="#how-to"], a[href="#customers"]').on('click', function(e){
    e.preventDefault();
    scrollTo($(this).attr('href'));
  });

  $('#customers').find('.customers-logo').on('click', function(){
    var customer = $(this).data('customer'),
      customerContent = $('.customer-content').filter('.' + customer);

    if ($(this).hasClass('active')){
      $(this).removeClass('active');      
      customerContent.removeClass('active');
    } else {
      $('#customers').find('.customers-logo').removeClass('active');
      $(this).addClass('active');
      $('.customer-content').removeClass('active');
      customerContent.addClass('active');
      if (customerContent.length > 0){
         scrollTo(customerContent);
      }
    }
  });
});
