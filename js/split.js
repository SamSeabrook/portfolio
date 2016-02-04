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

	/*-----Live Update Active View-----*/
	// This will highlight in the nav bar the 'active' page user is viewing
	$(window).scroll( function() {
		var about = $('#about').offset().top;
		var banner = $('.page-nav').height();
		var windowScroll = $(window).scrollTop();

		if (windowScroll > (about - banner)) {
			$('.page-nav').fadeIn(300);
			$('.page').each(function(i) {
				if ($(this).position().top <= (windowScroll)) {
					$('.page-nav li a.active').removeClass('active');
					$('.page-nav li a').eq(i+1).addClass('active');
				}
			});
		} else {
			$('.page-nav').fadeOut(300);
			$('.page-nav li.active').removeClass('active');
		}
	}).scroll();

	/*-----Scroll Navigation-----*/
	// Scrolls screen to selected anchor on page
	$('a').on('click', function() {
		var location = (this).getAttribute("href");
		$('html body').animate({'scrollTop':$(location).offset().top}, 500);
		event.preventDefault();
	});
});