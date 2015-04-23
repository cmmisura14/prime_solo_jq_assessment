$(document).ready(function(){
	var i = 0;

	$('#masterDiv').on('click', "#colorChange", function(){
		$(this).parent().css("background-color", "blue");
		console.log('.newDiv');
	});
	

	$('#masterDiv').on('click', "#removeDiv", function(){
		$(this).parent().remove();
	});

	$('#generate').on('click', function(){
		i++;
		$('#masterDiv').append("<div class='newDiv'>Line #"+ i + " <button id='colorChange'>Change Color</button><button id='removeDiv'>Remove</button>");
	});
	

	
});