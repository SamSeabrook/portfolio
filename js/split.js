jQuery(document).ready( function($){
	/*-----Image Splitter javaScript-----*/
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

	/*-----Active Link-----*/
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