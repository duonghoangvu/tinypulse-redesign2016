(function($){
	var defaults = {
		globalHeader: '.header',
		content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel doloremque, architecto voluptatem. Assumenda tenetur quibusdam dolorum nulla esse! Impedit illo suscipit aliquid, distinctio nam tenetur harum sapiente ipsum nihil rem?',
		exploreUrl: '#'
	},
	banner, bannerH, globalHeader, isHidden = false;

	var init = function(ele){
		var css = '<style>body{transition:all 0.3s}.tiny-banner{position:fixed;top:0;left:0;right:0;z-index:999;background:#0085F6;box-sizing:border-box;transition:all 0.21s;transform:translateY(-300px)}.tiny-banner>div{display:inline-block;box-sizing:border-box;padding:10px 10px 15px 10px;vertical-align:middle}.tiny-banner>div p,.tiny-banner>div a{color:#fff;margin:0}.tiny-banner .logo{width:20%}.tiny-banner .logo p{font-size:20px;font-weight:700;text-align:center}.tiny-banner .content{width:60%}.tiny-banner .content p{font-family:Lato-Light}.tiny-banner .buttons{width:20%;text-align:right}.tiny-banner .buttons a{font-family:Lato-Light}.tiny-banner .buttons .explore{padding:5px 15px 7px 15px;color:#fff;background:#00C26B;text-align:center;border-radius:3px;margin-right:20px}.tiny-banner .buttons .hide-banner{margin-left:30px;color:#005DB5;font-family:Lato-Thin}</style>';
		$('head').append(css);

		banner = $('<div class="tiny-banner"> <div class="logo"><p>Welcome To TINYpulse</p></div><div class="content"> <p>' + settings.content + '</p></div><div class="buttons"> <a href="' + settings.exploreUrl + '" class="explore">Explore</a> <a data-action="hide-banner" href="#" class="notnow">Not Now</a> <a href="#" class="hide-banner" data-action="hide-banner"><i class="fa fa-times" aria-hidden="true"></i></a> </div></div>');
		$(ele).prepend(banner);
		banner.find('a[data-action="hide-banner"]').on('click', function(e){
			e.preventDefault();
			isHidden = true;
			saveState();
			refineStyles();
		});
		
		$(window).on('resize', function(){
			bannerH = banner.height();
			window.setTimeout(function(){
				refineStyles();
			}, 200);
		}).trigger('resize');

		globalHeader = $(settings.globalHeader);
		loadState();
		refineStyles();
	}, 
	refineStyles = function(){
		// console.log(bannerH);
		if (!isHidden){
			$('body').css({
				'margin-top': bannerH + 'px',
			});
			globalHeader.css({
				'transition': 'all 0.3s',
				'top': bannerH + 'px'
			});
			banner.css({
				'transform': 'translateY(0px)'
			});
		} else {
			$('body').css({
				'margin-top': '',
			});
			globalHeader.css({
				'top': ''
			});
			banner.css({
				'transform': 'translateY(-'+ bannerH +'px)'
			});
		}
	},
	saveState = function(){
		localStorage.setItem('tiny-banner-closed', 'true');
	}, 
	loadState = function(){
		if (localStorage.getItem('tiny-banner-closed') != 'true'){
			isHidden = false;
		} else {
			isHidden = true;
		}
	};	

	$.fn.tinyban = function (options) {
    settings = $.extend(true, defaults, options);
		init(this);
  }
})(jQuery);

// This is an jQuery plugin to add the banner in top of the website
// just use $.tinyban()
jQuery(document).ready(function($) {
	$('body').tinyban({
		globalHeader: '.main-nav-container', // the selector of the global header of the website (put here to push it down when the banner is showing)
		content: 'Content goes here', // custom content should be here
		exploreUrl: 'http://tinypulse.com' // The url of the Explore button
	});
});