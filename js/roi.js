jQuery(document).ready(function(){
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

  function is_numeric(event) {
    if (event.keyCode == 190){
          return;
    }else {
      // If it's not a number stop the keypress
      if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
          event.preventDefault(); 
      }   
    }
  }

  $('#number-of-employees').keydown(function(event) {
    is_numeric(event);
  });

  $('#average-salary').keydown(function(event) {
    is_numeric(event);
  });
  
  $('#yearly-turnover').keydown(function(event) {
    is_numeric(event);
  });
  
  function calculateROI() {

    var num_employees = $('#number-of-employees').val();
    var average_salary = $('#average-salary').val();
    var average_turnover = $('#yearly-turnover').val();
    var reduction = $('.rangeSlider__handle').data('content')/100;

    var scale = 2.13;
    if(average_salary < 75001) {
      scale = 0.2;
    } if(average_salary < 30001) {
      scale = 0.16;
    }

    var cost_to_rehire = (num_employees * average_turnover * average_salary * scale) / 100;
    var cost_of_tinypulse = num_employees*12*10;
    var reduced_cost_to_rehire_with_tinypulse = num_employees*(1 - reduction)*average_turnover*average_salary*scale/(100*100);

    console.log( 'average_turnover ' + average_turnover)
    var number_employees_saved = (num_employees*average_turnover/100) - num_employees*(1-reduction)*average_turnover/100;
    var saving = cost_to_rehire - cost_of_tinypulse - reduced_cost_to_rehire_with_tinypulse;

    $('#cost-to-rehire').text(cost_to_rehire);
    $('#cost-of-tinypulse').text(cost_of_tinypulse);
    $('#reduced-cost-to-rehire-with-tinypulse').text(reduced_cost_to_rehire_with_tinypulse);
    $('#number-employees-saved').text(Math.ceil(number_employees_saved));
    $('#annual-save-using-tinypulse').text(saving);

    // Format currency
    $('#annual-save-using-tinypulse').formatCurrency();
    $('#cost-to-rehire').formatCurrency();
    $('#cost-of-tinypulse').formatCurrency();
    $('#reduced-cost-to-rehire-with-tinypulse').formatCurrency();
    $('#annual-save-using-tinypulse').formatCurrency();
  }

  $('#number-of-employees').change(function(){
    calculateROI();
  });

  $('#average-salary').change(function(){
    calculateROI();
  });

  $('#yearly-turnover').change(function(){
    calculateROI();
  });

  var slider = document.querySelectorAll('input[type="range"]');
  rangeSlider.create(slider, {
      polyfill: true,     // Boolean, if true, custom markup will be created
      rangeClass: 'rangeSlider',
      disabledClass: 'rangeSlider--disabled',
      fillClass: 'rangeSlider__fill',
      bufferClass: 'rangeSlider__buffer',
      handleClass: 'rangeSlider__handle',
      startEvent: ['mousedown', 'touchstart', 'pointerdown'],
      moveEvent: ['mousemove', 'touchmove', 'pointermove'],
      endEvent: ['mouseup', 'touchend', 'pointerup'],
      min: 1,          // Number , 0
      max: 100,          // Number, 100
      step: null,         // Number, 1
      value: 74,        // Number, center of slider
      buffer: null,       // Number, in percent, 0 by default
      stick: 25,        // [Number stickTo, Number stickRadius] : use it if handle should stick to stickTo-th value in stickRadius
      borderRadius: 10,    // Number, if you use buffer + border-radius in css for looks good,
      onInit: function () {
        $('.rangeSlider__handle').attr('data-content', '74');
      },
      onSlideStart: function (position, value) {
      },
      onSlide: function (position, value) {
        $('.rangeSlider__handle').attr('data-content', position);
      },
      onSlideEnd: function (position, value) {
        calculateROI();
      }
  });
});
