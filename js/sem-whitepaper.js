$(document).ready(function(){
  var interactiveForm = $('.interactive-form'),
    hbsptForm = $('.hbspt-form');
  var fillData = function(){
    var email = interactiveForm.find('input[name=email]').val(),
      fullName = interactiveForm.find('input[name=fullname]').val(),
        employees = interactiveForm.find('input[name=numberofemployees_number]').val(),
          phone = interactiveForm.find('input[name=phone]').val();
          hbsptForm = $('.hbspt-form');
          hbsptForm.find('input[name=email]').val(email);
          hbsptForm.find('input[name=firstname]').val(fullName);
          hbsptForm.find('input[name=phone]').val(phone);
          hbsptForm.find('input[name=numberofemployees_number_]').val(employees);
  };

  interactiveForm.find('form').on('submit', function(e){
    e.preventDefault();
    fillData();
    if ($('.faded').length == 2){
      $(this).find('input[type=submit]').attr('value', 'Download'); 
      nextField();
    } else {
      nextField();
      if ($(this).find('input[type=submit]').attr('value') == 'Download'){
        var anchor = document.createElement('a');
        anchor.href = 'https://www.tinypulse.com/hubfs/TINYpulse_Employee_Retention_Report.pdf';
        anchor.download = 'https://www.tinypulse.com/hubfs/TINYpulse_Employee_Retention_Report.pdf';

        var userAgent = window.navigator.userAgent;
        if (!userAgent.match(/iPad/i) && !userAgent.match(/iPhone/i)){
          anchor.click();
        }
        $(this).addClass('hidden');
        $(this).parent().find('.submitted-message').removeClass('hidden');
        $(this).parent().find('.title').addClass('hidden');
      }
    }
    hbsptForm.find('form').submit();
  });

  var nextField = function(){
    if ($('.faded').length == 3){
      return;
    }
    interactiveForm.find('.field').not('.faded').last().addClass('faded'); 
    interactiveForm.find('.field').not('.faded').last().find('input').attr('required', 'required'); 
    interactiveForm.find('.field').not('.faded').last().find('input').focus();
  };
  window.setTimeout(function(){
    $('input[name=numberofemployees_number_]').attr('placeholder','Number of employees*');
  }, 1000);
});
