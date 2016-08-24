$(document).ready(function(){
  $('.main-mobile-nav-container nav').height($(window).height());

  $('.hamburger').click(function() {
    $('body').addClass('mobile-nav-opened');
  });

  $(".cross").click(function() {
    $('body').removeClass('mobile-nav-opened');
  });
});
