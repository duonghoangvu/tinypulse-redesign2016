jQuery(document).ready(function($) {
	$(window).on('resize', function(){
		if ($(window).width() < 960){
			$('#site-footer').find('ul li:first-child').off('click').on('click', function(e){
				$(this).closest('ul').toggleClass('expanded');
			});
		}
	})
});
