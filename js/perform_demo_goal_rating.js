$(document).ready(function(){
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
  //showTabNav(Math.abs(getLeftPosi()));
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
  if (!(activePosition >= leftPosi && fullActive <= (leftPosi + wrapperLength))){
    $('.list').animate({left:"-"+activePosition+"px"},'slow',function(){
    });
    showTabNav(activePosition);
  }
}

var getCurrentActiveGoal = function(){
   activeGoal = window.location.hash.substr(1);
   if(activeGoal){
     $("a[href='#"+ activeGoal +"']").tab('show');
   }else {
     $('.list li').last().addClass('active');
     $('.list li a[data-toggle=pill]').tab('show');
   }
   showGoalNav($('.list li.active a')[0]);
}

var goalDetail = function(goalID){
  var rated_goals = localStorage.getItem('rated-goals');
  var activeIcon = '';
  if(rated_goals != null){
    rated_goals = rated_goals.split(',');
    if(rated_goals.indexOf('sales-campaign-'+goalID) > -1){
      activeIcon = 'active';
    }
  }
  return "<li><a data-toggle='pill' href='#sales-campaign-"+ goalID +"'><span class='icon-members'></span>Launch Sales Campaign<span class='icon-tick "+activeIcon+"'></span></a></li>";
}
var goalContent = function(goalID){
  var rated_goals = localStorage.getItem('rated-goals');
  var rated = '';
  var rated_image = "<img src='https://www.tinypulse.com/hubfs/redesign_2016/tour-guide/perform/rate-launch-sales-campaign.png' alt='Launch Sales Campaign' />"
  if(rated_goals != null){
    rated_goals = rated_goals.split(',');
    if(rated_goals.indexOf('sales-campaign-'+goalID) > -1){
      rated = 'rated';
      rated_image = "<img src='https://www.tinypulse.com/hubfs/redesign_2016/tour-guide/perform/rated-goal-details.png' alt='Launch Sales Campaign' />"
    }
  }
  return  "<div id='sales-campaign-"+goalID+"' class='tab-pane first-pane'>" +
            "<div class='rate-buttons'>"+
              "<div class='icon-rate-below rate-button' title='' data-placement='auto top' data-toggle='tooltip' data-original-title='Below Expectation'></div>"+
              "<div class='icon-rate-at rate-button' data-placement='auto top' data-toggle='tooltip' data-original-title='At Expectation'></div>"+
              "<div class='icon-rate-above rate-button "+rated+"' data-placement='auto top' data-toggle='tooltip' data-original-title='Above Expectation'></div>"+
              "<div class='rating-title'>Launch Sales Campaign</div>"+
            "</div>"+ rated_image +
          "</div>";
}
var loadDemoGoal = function(){
  var demo_goals = localStorage.getItem('total-demo-goals');
  if(demo_goals){
    for (i = 1; i <= parseInt(demo_goals); i++){
      goalDetails = goalDetail(i);
      $(".goal-details .row .wrapper ul.list").append(goalDetails);
      goalContents = goalContent(i);
      $(".goal-details .row .goal-contents").append(goalContents);
      $('.icon-rate-above').click(function(e){
        $(this).addClass('rated');
        $('.list li.active').find('span.icon-tick').addClass('active');
        var rated_goals = localStorage.getItem('rated-goals');
        if(rated_goals == null) {
          localStorage.setItem('rated-goals', $(this).parents('.first-pane.active').attr('id'));
        } else {
          localStorage.setItem('rated-goals', rated_goals +','+$(this).parents('.first-pane.active').attr('id'));
          $(this).parents('.first-pane.active').find('img').attr("style", "display:none");
          $(this).parents('.first-pane.active').append("<img src='https://www.tinypulse.com/hubfs/redesign_2016/tour-guide/perform/rated-goal-details.png' alt='Launch Sales Campaign' />");
        }
      });
    }
  }
  getCurrentActiveGoal();
};
loadDemoGoal();
$(".rate-button").tooltip();
//showGoalNav($('.list li.active a')[0]);
//setWrapperPosition($('.list li.active'));

$('.list li').click(function(e){
  //setWrapperPosition($(this));
  if(!$(this).hasClass('active')){
    $('.first-pane').removeClass('in').removeClass('active');
    $(this).find('a').tab('show');
  }
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
});

