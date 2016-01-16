jQuery(document).ready( function($){

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
	$('.split-wrapper').on( "mouseleave", function() {
		$(this).find('.divider-bar').css({
			left: '75%',
			transition: 'all .3s'
		});
		$(this).find('.coder-wrapper').css({
			transform: 'translateX(75%)',
			transition: 'all .3s'
		});
		$(this).find('.coder-image').css({
			transform: 'translateX(-75%)',
			transition: 'all .3s'
		});
	});

});