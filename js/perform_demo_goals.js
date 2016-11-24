$(document).ready(function(e){
    var newGoal = function(goal_id){
        return "<div class='col-lg-4 col-md-6 pd-lr-11 mg-t-15 goal' data-goal='sales-campaign-" + goal_id + "'>" +
          "<img class='sample-goal' src='https://www.tinypulse.com/hubfs/redesign_2016/tour-guide/perform/goal-launch-sales-campaign.png' alt='Launch Sales Campaign' />" +
          "<img class='sample-goal' style='display:none;' src='https://www.tinypulse.com/hubfs/redesign_2016/tour-guide/perform/goal-launch-sales-campaign-rated.png' alt='Launch Sales Campaign' />" +
          "</div>";
    };
    var loadDemoGoal = function(){
        var demo_goals = localStorage.getItem('total-demo-goals');
        if(demo_goals){
            for (i = 1; i <= parseInt(demo_goals); i++){
                new_goal = newGoal(i);
                $(".goal-list .row").append(new_goal);
            }    
        }
    };
    loadDemoGoal();
    
    $(".dropdown-toggle").click(function() {
        $(this).parent().find(".dropdown-menu").toggle();
    });
    
    $("#team-goal").click(function() {
        $(this).parents('.dropdown-menu').toggle();
    });
    
    $(".js-btn-submit").click(function() { 
        var total_demo_goals = (localStorage.getItem('total-demo-goals')) ? localStorage.getItem('total-demo-goals') : "0" ;
        current_goals = parseInt(total_demo_goals) + 1;
        localStorage.setItem('total-demo-goals', current_goals);
        new_goal = newGoal(current_goals);
        $(".goal-list .row").append(new_goal);
        $('#new-goal').modal('hide');
    });
    
    $(".goal").click(function(){
        window.location.href = "/perform-demo-goals-detail.html#"+ $(this).data('goal'); 
    });
});
