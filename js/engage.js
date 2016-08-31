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
  $(".overview-block").click(function(e){
    $(".overview-block").removeClass('selected');
    $(this).addClass('selected');
  });
  $(".overview-block").hover(function(){
    $('.overview-img').attr('style', 'display: none');
    $(this).find('.overview-img').attr('style', 'display: block; transition: all ease .8s;');
    $('.overview-block').not('.selected').find('.title').attr('style', 'color: #000;');
    $(this).find('.title').attr('style', 'color: #1C94EE;');
  });
  $(".overview-content").mouseleave(function(e){
    $('.overview-img').attr('style', 'display: none');
    $('.overview-block').not('.selected').find('.title').attr('style', 'color: #000;');
    $(this).find('.overview-block.selected .overview-img').attr('style', 'display:block; transition: all ease .8s;');
  });
  $(".hiw-icon").click(function(e){
    $(".hiw-content").removeClass('selected');
    $(this).parent().addClass('selected');
  });
  $(".hiw-content").hover(function(){
    $('.hiw-content .block-content').attr('style', 'display: none');
    $('.hiw-content').not('.selected').find('.icon').attr('style', 'background-position-y: 0;');
    $(this).find('.block-content').attr('style', 'display:block;transition: all .3s;');
    $(this).find('.icon').attr('style', 'background-position-y: -117px;');
  });
  $(".hiw-icons").mouseleave(function(e){
    $('.hiw-content .block-content').attr('style', 'display: none');
    $('.hiw-content').not('.selected').find('.icon').attr('style', 'background-position-y: 0;');
    $(this).find('.hiw-content.selected .block-content').attr('style', 'display:block;transition: all .3s;');
  });
});
