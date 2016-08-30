jQuery(document).ready(function($) {
  function showNextBlock(elementClass, element) {
    $(elementClass).removeClass('active');
    nextBlock = $(element).next(elementClass);
    if(nextBlock.length == 1){
      nextBlock.addClass('active');
    }else{
      $(elementClass).first().addClass('active');
    }
  }

  function showPrevBlock(elementClass, element) {
    $(elementClass).removeClass('active');
    prevBlock = $(element).prev(elementClass);
    if(prevBlock.length == 1){
      prevBlock.addClass('active');
    }else{
      $(elementClass).last().addClass('active');
    }
  }

  $(".overview .block-content").swipe({
    swipe:function (event, direction, distance, duration, fingerCount) {},
    fingers:$.fn.swipe.fingers.ALL,
    triggerOnTouchEnd:false,
    threshold:150
  }).on("click",function(){
    showNextBlock('.overview .block-content', this);
  });

  $(".how-it-works .block-content").on("click",function(){
    showNextBlock('.how-it-works .block-content', this);
  });

  function speakerMobileAction(){
    $(".why .speaker").on("click",function(){
      showNextBlock('.why .speaker', this);
    });
  }
  $(window).on('resize', function(){
    if ($(window).width() < 960){
      speakerMobileAction();
    } else {
      $(".why .speaker").on("click",function(){});
    }
  });
  if ($(window).width() < 960){
    speakerMobileAction();
  } else {
    $(".why .speaker").on("click",function(){});
  }
  $('.prev-speaker').click(function(){
    showPrevBlock('.speaker', $(this).parent());
  });
  $('.next-speaker').click(function(){
    showNextBlock('.speaker', $(this).parent());
  });
});
