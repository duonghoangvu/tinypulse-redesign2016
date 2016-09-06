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

  function calculateROI() {

    var num_employees = $('#number-of-employees').val();
    var average_salary = $('#average-salary').val();
    var average_turnover = $('#yearly-turnover').val();
    var reduction = $('.rangeSlider__handle').data('content');

    var scale = 2.13;
    if(average_salary < 75001) {
      scale = 0.2;
    } if(average_salary < 30001) {
      scale = 0.16;
    } 

    console.log("num_employees: " + num_employees + " -- average_salary " + average_salary + " -- average_turnover " + average_turnover + " -- reduction" + reduction + " -- scale" + scale);

    var cost_to_rehire = (num_employees * average_turnover * average_salary * scale) / 100;
    var cost_of_tinypulse = num_employees*10;
    var cost_to_rehire_with_tinypulse = num_employees*(1 - reduction)*average_turnover*average_salary*scale/100100;
    var number_employees_saved = 
    $('#cost-to-rehire').text(cost_to_rehire);
    $('#cost-of-tinypulse').text(cost_of_tinypulse);
    $('#reduced-cost-to-rehire-with-tinypulse').text(cost_to_rehire_with_tinypulse);
    $('#annual-save-using-tinypulse').text('$123456789');

    // Number Employees Saved: (numEmployeesturnover/100) - numEmployees(1-reduced)*turnover/100
    // Savings: (Cost to Rehire) - (Cost of TINYpulse) - (Reduced Cost to Rehire)
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
        console.info('onInit');
        $('.rangeSlider__handle').attr('data-content', '74');
      },
      onSlideStart: function (position, value) {
          console.info('onSlideStart', 'position: ' + position, 'value: ' + value);
      },
      onSlide: function (position, value) {
        console.log('onSlide', 'position: ' + position, 'value: ' + value);
        $('.rangeSlider__handle').attr('data-content', position);

      },
      onSlideEnd: function (position, value) {
        console.warn('onSlideEnd', 'position: ' + position, 'value: ' + value);
        calculateROI();
      }
  });
});
