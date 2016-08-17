$(document).ready(function(){
  $('.hamburger').click(function() {
    $('body').addClass('mobile-nav-opened');
  });

  $(".cross").click(function() {
    $('body').removeClass('mobile-nav-opened');
  });
});
