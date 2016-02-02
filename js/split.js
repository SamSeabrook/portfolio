jQuery(document).ready( function($){
	//$.ajaxSetup({ dataType: "jsonp" });

	/*-----Image Splitter javaScript-----*/
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

	/*-----Navigation Bar Scroll View-----*/
	$(window).scroll( function() {
		/* If distance from current element to top of page is greater than
		* distance from '#about' page to top of page minus banner height */
		if ( $(this).scrollTop() > ($('#about').offset().top - $('.page-nav').height()) ){
			$('.page-nav').fadeIn(300);
		} else {
			$('.page-nav').fadeOut(300);
		}
	});

	/*-----Active Link-----*/
	$('.hero-btn').click( function(){
		$('.page-nav ul li.active').removeClass('active');
		$('.page-nav ul li.start').addClass('active');
	});
	$('.page-nav ul li').click( function(){
		$('.page-nav ul li.active').removeClass('active');
		$(this).addClass('active');
	});

	/*-----Scroll Navigation-----*/
	$('a').on('click', function() {
		var location = (this).getAttribute("href");
		$('html body').animate({'scrollTop':$(location).offset().top}, 500);
		event.preventDefault();
	});

});