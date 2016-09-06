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
	var $button = $("input[type='submit']"),
		counter = 0;
	
	$button.on("click", function(event){
		event.preventDefault();
		counter++;
		
		
		var $name = $("input[type='text']").val();
		var $mail = $("input[type='email']").val();
		var $newData = $("<tr class='one-row'><td>" + counter + "</td><td>" + $name + "</td><td>" +  $mail +"</td><td><span class='del'>X</span></td></tr>");		
		$("table.pink-table").append($newData);
	})
//DELETE
	var $delButton = $(".del")

	
	$(".pink-table").on("click", ".del", function(event){
		$(this).parents(".one-row").remove();
		
	});
	
	$("a.add-user").on("click", function(event){
		event.preventDefault();
		$("form.to-fade").fadeToggle();
	});

});