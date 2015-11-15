$(function(){
	function goToByScroll(id){
		id = id.replace("link", "");
		$('html, body').animate({
			scrollTop: $("#"+id).offset().top
		}, 'slow');
	}

	$('#nav-arrow > ul > li > a').click(function(e){
		e.preventDefault();
		goToByScroll($(this).attr('id'));
	});
});