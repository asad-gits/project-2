$(document).ready(function(){

	//Equal Height
	let singleDiv = $('#lms-university-area .col-3');
	let maxHeight = Math.max.apply(null, $(".versity-content").map(function (){
	    return $(this).height();
	}).get());
	singleDiv.height(maxHeight);
	$('#lms-university-area .col-3').css('margin-bottom','30px');


	//Mobile Nav Menu
	$('.mobile-nav').click(function(){
		$('.lms-menu').slideToggle();
	});
})
