jQuery(document).ready( function($){
	
	/*-----Image Splitter-----*/
	// When cursor enters "right-side" container, slide divider to reveal coder image
	$('.coder-wrapper').on( "mouseenter", function() {
		$(this).closest('.split-wrapper').find('.divider-bar').css({
			left: '25%',
			transition: 'all .3s'
		});
		$(this).css({
			transform: 'translateX(25%)',
			transition: 'all .3s'
		});
		$(this).find('.coder-image').css({
			transform: 'translateX(-25%)',
			transition: 'all .3s'
		});
	});
	// Keep coder image displayed unless cursor enters "left-side" container, then slide back
	$('.hero-textwrapper').on( "mouseenter", function() {
		$(this).closest('.split-wrapper').find('.divider-bar').css({
			left: '75%',
			transition: 'all .3s'
		});
		$(this).parent().find('.coder-wrapper').css({
			transform: 'translateX(75%)',
			transition: 'all .3s'
		});
		$(this).parent().find('.coder-image').css({
			transform: 'translateX(-75%)',
			transition: 'all .3s'
		});
	});

	/*-----Update Active Page Selection-----*/
	// This will highlight the tab corresponding to the current page
	$(window).scroll( function() {
		var banner = $('.page-nav').height();
		var windowScroll = $(window).scrollTop();

		if (windowScroll > (banner)) {
			$('.page-nav').fadeIn(300);
			$('.page').each(function(i) {
				if ($(this).position().top <= (windowScroll) + 5) { // '+ 5' adjusts for auto height
					$('.page-nav li a.active').removeClass('active');
					if(i<2) {	// This accounts for skipping over the logo
						$('.page-nav li a').eq(i).addClass('active');
					}
					else {
						$('.page-nav li a').eq(i+1).addClass('active');
					}
				}
			});
		} else {
			$('.page-nav').fadeOut(300);
			$('.page-nav li.active').removeClass('active');
		}
	}).scroll();

	/*-----Scroll Navigation-----*/
	// Scrolls screen to selected anchor on page
	$('.links').on('click', function() {
		if((this).getAttribute("href")) {
			var location = (this).getAttribute("href");
		} else { // Must make separate function since svg doesn't have href attribute
			var location = "#home";
		}
		$('html body').animate({'scrollTop':$(location).offset().top}, 500);
		event.preventDefault();
	});
	$('.logo-link').on('click', function() {
		var location = "#home";
		if (location.length) {
			var locationTop = $(location).offset().top;
		}
		$('html body').animate({'scrollTop':$(location).offset().top}, 500);
	});

	// $('.logo-link').on({
	// 	mouseenter: function() {
	// 		var paths = document.getElementsByClassName('paths');
	// 		var length=0;
	// 		for (i=0; i<2; i++) {
	// 			length = paths[i].getTotalLength();
	// 			paths[i].style.strokeDasharray = length;
	// 			paths[i].style.strokeDashoffset = length;
	// 		}
	// 	},
	// 	mouseleave: function() {
			
	// 	}
	// });
});