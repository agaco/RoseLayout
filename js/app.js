$(document).ready(function(){
	
//$(window).on("load", function(event){
//	console.log("test na star");
	
	//$("span.js-clock").text("trwaa");
	
		var today = new Date();
		var h = today.getHours();
		var m = today.getMinutes();
		var s = today.getSeconds();
	
	setInterval(function() {
		$("span.js-clock").text(h + ":" + m + ":" + s);
		
		h = today.getHours();
		m = today.getMinutes();
		s = today.getSeconds();
	}, 1000);
		
//		
//});
	

    
});