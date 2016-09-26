$(function() {
  var activateResultsCallout = function(index) {
    $('.dots a').removeClass('active');
    $('.dots a').eq(index).addClass('active');
    $('.callout').removeClass('active');
    $('.callout').eq(index).addClass('active');
    $('.screen').removeClass('active');
    $('.screen').eq(index).addClass('active');
  };

  $('.dots a').click(function(e){
    e.preventDefault();
    activateResultsCallout($(this).index());
  });

  $('.callout').click(function(e){
    activateResultsCallout($(this).index());
  });

  $('.scroll_to').click(function(e){
    e.preventDefault();
    var offsetTop = $(this).offset();
    $("body,html").animate({scrollTop:offsetTop.top + 30}, 700);
  });

  $('.mobile-nav a.toggle').click(function(e){
    e.preventDefault();
    $(this).parent().find('nav').toggle();
  });

  var homePageVideo = '<iframe frameborder="0" height="300" src="https://player.vimeo.com/video/52587746?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=true" width="516"></iframe>';
  var homePageVideoShow = function(video, e){
    $(e).hide();  
    $(e).parent().addClass('playing').append(video);
  };

  if ($('.home-page-video')) {
    $('.show-video').click(function(e){
      e.preventDefault();
      homePageVideoShow(homePageVideo, this);
    });
  }
  
  var engageT4cVideo = '<iframe frameborder="0" height="212" src="https://www.youtube.com/embed/SwZHhZIVt78?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=true" width="430"></iframe>'
  $('#show-engage-video-t4c').click(function(e){
    e.preventDefault();
    homePageVideoShow(engageT4cVideo, this);
  })
  
  var engageT4bVideo = '<iframe frameborder="0" height="212" src="https://www.youtube.com/embed/5Ndcw4Ri3Qs?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=true" width="430"></iframe>'
  $('#show-engage-video').click(function(e){
    e.preventDefault();
    homePageVideoShow(engageT4bVideo, this);
  })
  
  
  $(document).on("click", ".ga_event_static_page", function (event) {
    window.TpUtils.trackEvent("Free Trial Signup", "Click", $(this).data("event_label"));
  });

  $(document).on("click", ".ga_event_login_in_button", function (event) {
    window.TpUtils.trackEvent("Login In Button", "Click", $(this).data("event_label"));
  });
    

  $(document).on("click", ".home-page-video a img", function(event){
    window.TpUtils.trackEvent("Video", "Click", 'Homepage Video');
  });

  var f = document.getElementById('video_home_page'),
    url = f.src.split('?')[0];

  // Helper function for sending a message to the player
  function post(action, value) {
    var data = { method: action };

    if (value) {
      data.value = value;
    }

    f.contentWindow.postMessage(JSON.stringify(data), url);
  }

  function onReady() {
    post('addEventListener', 'finish');
    post('addEventListener', 'play');
  }

  function onFinish() {

  }

  function onPlay() {
    window.TpUtils.trackEvent("Video", "Play", 'Homepage Video');
  }

  // Handle messages received from the player
  function onMessageReceived(e) {
    var data = JSON.stringify(e.data);

    switch (data.event) {
      case 'ready':
        onReady();
        break;

      case 'play':
        onPlay();
        break;

      case 'finish':
        onFinish();
        break;
    }
  }
// Listen for messages from the player
  if (window.addEventListener){
    window.addEventListener('message', onMessageReceived, false);
  }
  else {
    window.attachEvent('onmessage', onMessageReceived, false);
  }
});
