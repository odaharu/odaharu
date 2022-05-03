$(function(){
	var dir=-1;
	var interval=3000;
	var duration=700;
	var timer;
	
	$(".slide ul").prepend($(".slide li:last-child"));
	//$(".slide ul").css("left",-605);
	timer = setInterval(slideTimer,interval);
	function slideTimer(){
		$(".mainVisual").animate({"left":"-=605px"},duration,
		function(){
			$(this).append($(".mainVisual li:first-child"));
			$(this).css("left",-605);	
		
		});
	
	}
	
	
	
	
});




