$(document).ready(function(){

  $(".btn-show-detail").click(function(){
    $(".btn-show-detail").hide();
    $(".btn-hide-detail").show();
    $(".details").slideDown("slow");
  });

  $(".btn-hide-detail").click(function(){
    $(".btn-hide-detail").hide();
    $(".btn-show-detail").show();
    $(".details").slideUp("slow");
  });

  $("#range-slider").click(function(){
    // alert("test test");
  });  

  $("#range-slider").ionRangeSlider({
    min: 0,
    max: 100,
    from: 30,
    disable: true
  });

  console.log('roi');
});
