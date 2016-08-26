jQuery(document).ready(function($) {
  function callErrorMessage() {
    if ($('form.hs-form').length > 0) {
      $('form.hs-form').on('submit', function(){
        if($('input[name="hs_context"]').val() != '') {
          $('.alert-error').attr('style','opacity: 1');
        }
      });
    } else {
      setTimeout(callErrorMessage, 500);
    }
  }
  callErrorMessage();
  $('.map').on('click', function(){
    $(this).addClass('map-clicked');
  });
});
