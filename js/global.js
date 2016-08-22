jQuery(document).ready(function($) {
	if ($(window).width() < 960){
		$('#site-footer').find('ul li:first-child').on('click', function(e){
			$(this).closest('ul').toggleClass('expanded');
		});
	}
});
