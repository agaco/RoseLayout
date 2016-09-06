$(document).ready(function(){
//CLOCK	
	function clock(){
		var today = new Date(),
			h = today.getHours(),
			m = today.getMinutes(),
			s = today.getSeconds();
	$("span.js-clock").text(h + ":" + m + ":" + s);
		 setTimeout(clock, 1000);
	};
	clock()
   
//TABLE
	var $button = $("input[type='submit']");
	console.log($button)
	
	$button.on("click", function(event){
		console.log("test")
		$("#name").attr("id").val();
		console.log($("#name").attr("id").val());
		event.stopPropagation();
		
	})
	
	
	
});