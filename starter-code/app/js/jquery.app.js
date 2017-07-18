






$(document).ready(function(){
// $('#submit').click(function(event){
// 	event.preventDefault();


	var kitty = $.get( "https://ga-cat-rescue.herokuapp.com/api/cats")
		.done(function(data){
		console.log(data) ;
		var thing = JSON.parse(kitty.responseText);
		console.log(thing);
		console.log(thing[0]);

	});
	

});
