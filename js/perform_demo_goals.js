var widthOfList = function(){
  var itemsWidth = 0;
  $('.list li').each(function(){
    var itemWidth = $(this).outerWidth() + 22;
    itemsWidth+=itemWidth;
  });
  return itemsWidth;
};

var getLeftPosi = function(){
  return $('.list').position().left;
};

var widthOfWrapper = function(){
  return $('.wrapper').outerWidth();
}
$(window).on('resize',function(e){
  showTabNav(Math.abs(getLeftPosi()));
  setWrapperPosition($('.list li.active'));
});

var showGoalNav = function(current_tab){
  first_tab = $('.list li a')[0];
  last_tab = $('.list li a').last()[0];
  if(current_tab == first_tab){
    $('.next-goal').show();
    $('.previous-goal').hide();
  }else if(current_tab == last_tab){
    $('.next-goal').hide();
    $('.previous-goal').show();
  }else{
    $('.next-goal').show();
    $('.previous-goal').show();
  }
}

var showTabNav = function(endPoint){
  showRightNav(endPoint);
  showLeftNav(endPoint);
}

var showLeftNav = function(endPoint){
  if(endPoint == 0){
    $('.scroller-left').hide();
  }else{
    $('.scroller-left').show();
  }
}

var showRightNav = function(endPoint){
  console.log('endPoint '+endPoint);
  console.log('wrapper '+ widthOfWrapper());
  console.log('list '+ widthOfList());
  if((endPoint + widthOfWrapper()) >= widthOfList()){
    $('.scroller-right').hide();
  }else{
    $('.scroller-right').show();
  }
}

var setWrapperPosition = function(element){
  activePosition = element.position().left;
  leftPosi = Math.abs(getLeftPosi());
  wrapperLength = widthOfWrapper();
  fullActive = activePosition + element.width();
  console.log(wrapperLength);

  if (!(activePosition >= leftPosi && fullActive <= (leftPosi + wrapperLength))){
    $('.list').animate({left:"-"+activePosition+"px"},'slow',function(){
    });
    showTabNav(activePosition);
  }
}

showGoalNav($('.list li.active a')[0]);
//setWrapperPosition($('.list li.active'));
//reAdjust();

$('.list li').click(function(e){
  setWrapperPosition($(this));
});

$('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
  showGoalNav(e.target);
  setWrapperPosition($(e.target).parent());
});

$('.previous-goal').click(function(e){
  prevTab = $('.list li.active').prev().find('a');
  prevTab.tab('show');
});

$('.next-goal').click(function(e){
  nextTab = $('.list li.active').next().find('a');
  nextTab.tab('show');
});

$('.scroller-right').click(function() {
  endPoint = Math.abs(getLeftPosi()) + widthOfWrapper();
  $('.list').animate({left:"-"+endPoint+"px"},'slow',function(){
  });
  showTabNav(endPoint);
});

$('.scroller-left').click(function() {
  leftPosi = Math.abs(getLeftPosi());
  wrapperLength = widthOfWrapper();
  if(leftPosi < wrapperLength){
    endPoint = 0;
  } else {
    endPoint = leftPosi - wrapperLength;
  }
  $('.list').animate({left:"-"+endPoint+"px"},'slow',function(){
  });
  showTabNav(endPoint);
});
