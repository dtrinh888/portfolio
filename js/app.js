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

	var portfolio = function(p, pA){
		var $portfolio = this;
		$portfolio.p = project;
		$portfolio.pA = projectArea;
		$portfolio.currentProject = 0;

		$portfolio.displayProject = function(){
			if($portfolio.currentProject < 0 || $portfolio.currentProject >= $portfolio.projects.length) {
				return false;
			}
		}; 
	};

});