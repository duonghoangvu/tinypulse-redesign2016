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
  $('.quote').get(position).className = "quote active";


  var video = ["japan", "health", "manufacturing", "trade"];
  var ip = ["1.1.1.1", "2.2.2.2", "3.3.3.3", "4.4.4.4"];

  var testIP = window.localStorage.getItem('test-ip');
  var videoName = video[ip.indexOf(testIP)];
  $('#video').attr('src', '/images/video/' + videoName + '.mp4');
});

function setIP(ip){
  window.localStorage.setItem('test-ip', ip);
  window.location = ('http://localhost:8000/index-new.html');
}


