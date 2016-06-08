$(function(){

	$('#header-nav > ul > li > a, .nav-arrow').click(function(e){
		e.preventDefault();
		var section;
		
		if($(this).attr('href')){
			section = $(this).attr('href');
		} else {
			section = $(this).closest('a').attr('href');
		}

		if($('header').css('display') === 'none'){
			$('html, body').animate({
				scrollTop: parseInt($(section).position().top)
			}, 1000);
		} else {
			$('html, body').animate({
				scrollTop: parseInt($(section).position().top) - 50
			}, 1000);
		}
	});
});