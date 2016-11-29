$(document).ready(function(){
  //walkthrough
  var updateWtStep = function(){
    var step = 'wt-step-' + (localStorage.getItem('wt-step') || 3);
    $('body').removeClass('wt-step-1 wt-step-2 wt-step-3 wt-step-4').addClass('wt-on ' + step);
  },
  updateWtStepData = function(step){
    localStorage.setItem('wt-step', step);
  };

  if (!localStorage.getItem('walkthrough-done')){
    var step = 'wt-step-' + (localStorage.getItem('wt-step') || 3);
    updateWtStep();
  }
  
  $('body').on('click', '#rate-now', function(e){
    e.preventDefault();
    updateWtStepData(4);
    updateWtStep();
  });
  
  
  
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
   if (activeGoal != ''){
    $("a[href='#"+ activeGoal +"']").tab('show');     
   }
}

var goalDetail = function(goalID){
    return "<li class='active'><a data-toggle='pill' href='#sales-campaign-"+ goalID +"'><span class='icon-members'></span>Launch Sales Campaign<span class='icon-tick'></span></a></li>";
}
var goalContent = function(goalID){
  var wtContent = '<div class="wt-content-wrapper wt-step-3"><div class="content"><h3 class="title">RATE YOUR GOAL</h3><div class="instruction"><p>Select <i class="icon icon-arrow-up"></i> to rate <span class="above">Above</span> expectation.</p><p>You will be able to rate your employees\' goal with 3 simple options: <span class="below">Below</span> expectation, At expectation and <span class="above">Above</span> expectation.<a href="#" id="rate-now">RATE</a></p></div><div class="buttons"><a href="/perform">Skip</a><div class="indicators"><span></span><span class="active"></span><span></span> </div></div></div></div>';
  return  wtContent + "<div id='sales-campaign-"+goalID+"' class='tab-pane active first-pane'>" +
                "<img src='https://www.tinypulse.com/hubfs/redesign_2016/tour-guide/perform/launch-sales-campaign-dashboard.png' alt='General Performance Dashboard' />"+
                "<div class='card flatten-card'>"+
                  "<div class='card-fill-content'>"+
                    "<ul class='fill-horizontal nav nav-tabs' role='tablist'>"+
                      "<li class='active'>"+
                        "<a href='#sales-campaign-"+goalID+"-rating' aria-controls='sales-campaign-rating' role='tab' data-toggle='tab' aria-expanded='true'>RATING</a>"+
                      "</li>"+
                      "<li>"+
                        "<a href='#sales-campaign-"+goalID+"-activities' aria-controls='sales-campaign-activities' role='tab' data-toggle='tab' aria-expanded='false'>ACTIVITIES</a>"+
                      "</li>"+
                    "</ul>"+
                    "<div class='tab-content'>"+
                      "<div class='tab-pane active in' id=sales-campaign-'"+goalID+"-rating' role='tabpanel'>"+
                        "<img src='https://www.tinypulse.com/hubfs/redesign_2016/tour-guide/perform/launch-sales-campaign-rating.png' alt='Rating' />"+
                        "<img class='rated' src='https://www.tinypulse.com/hubfs/redesign_2016/tour-guide/perform/rating.png' alt='Rating' />"+
                        "<div class='clearfix'></div>"+
                      "</div>"+
                      "<div class='tab-pane' id='sales-campaign-"+goalID+"-activities' role='tabpanel'>"+
                        "<img src='https://www.tinypulse.com/hubfs/redesign_2016/tour-guide/perform/launch-sales-campaign-activities.png' alt='Activities' />"+
                        "<img class='rated' src='https://www.tinypulse.com/hubfs/redesign_2016/tour-guide/perform/activities.png' alt='Activities' />"+
                        "<div class='clearfix'></div>"+
                      "</div>"+
                    "</div>"+
                  "</div>"+
                "</div>"+
              "</div>";
}
var loadDemoGoal = function(){
    var demo_goals = localStorage.getItem('total-demo-goals');
    if(demo_goals){
        for (i = 1; i <= parseInt(demo_goals); i++){
            goalDetail = goalDetail(i);
            $(".goal-details .row .wrapper ul.list").append(goalDetail);
            goalContent = goalContent(i);
            $(".goal-details .row .goal-contents").append(goalContent);
        }    
    }
    getCurrentActiveGoal();
};
loadDemoGoal();
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



