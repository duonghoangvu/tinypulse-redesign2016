jQuery(document).ready(function($) {
	$('#sub-nav-trigger').on('click', function(e){
		e.preventDefault();
		$(this).closest('ul').toggleClass('expanded');
	});
  $('.subnav').find('a:not(#sub-nav-trigger)').on('click', function(e){
    e.preventDefault();
    $('.subnav li').removeClass('active');
    $(this).closest('li').addClass('active');
    $('#sub-nav-trigger').trigger('click');
  });
	$(window).on('resize', function(){
		if ($(window).width() < 960){
			$('#site-footer').find('ul li:first-child').off('click').on('click', function(e){
				$(this).closest('ul').toggleClass('expanded');
			});
		}
	})
});
