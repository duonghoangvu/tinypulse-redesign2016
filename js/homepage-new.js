jQuery(document).ready(function($) {
  $(window).on('scroll', function(){
    var scrollTop = $(window).scrollTop(), 
      windowH = $(window).height();

    if (scrollTop >= 50){
      $('.main-nav-container').addClass('sticked');
    } else {
      $('.main-nav-container').removeClass('sticked');
    }

  });



  var words = $('#words')
  words.typed({
    strings: ["Happiness.  ^1000", "Talent.  ^1000", "WOWplace.  ^1000"],
    typeSpeed: 0,
    backDelay: 1000,
    loop: true
  });


  var position = Math.round(Math.random()*2);
  console.log(position);
  $('.quote').get(position).className = "quote active";
});


