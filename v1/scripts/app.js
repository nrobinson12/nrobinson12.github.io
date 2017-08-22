/*	Nicholas Robinson
	Portfolio Website
    Start: April 19 2017
*/

$(".navbtn").click(function(e){
	
	e.preventDefault();
	
	var dest=0;
	
	if($(this.hash).offset().top > $(document).height()-$(window).height()) {
		dest = $(document).height()-$(window).height();
	}
	else {
		dest = $(this.hash).offset().top - 200;
	}
	
	$('html,body').animate({scrollTop:dest}, 1000, 'swing');
	
});