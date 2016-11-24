$(document).ready(function(){
  var overviewActions = function(){
    $(".overview-desc").click(function(e){
      $(".overview .block-content").removeClass('active');
      $(this).parent().addClass('active');
    });
    $(".overview-desc").hover(function(){
      $('.overview .overview-img').attr('style', 'display: none');
      $(this).parent().find('.overview-img').attr('style', 'display:block;');
    });
    $(".overview-desc").mouseleave(function(e){
      $('.overview .overview-img').attr('style', 'display: none');
      $('.overview .block-content.active').find('.overview-img').attr('style', 'display:block;');
    });
  };
  $(window).on('resize',function(e){
    if($(window).width() > 959){
      overviewActions();
    } else {
      $('.overview .overview-img').attr('style', 'display: block');
    }
  });
  if($(window).width() > 959){
    overviewActions();
  };
});

