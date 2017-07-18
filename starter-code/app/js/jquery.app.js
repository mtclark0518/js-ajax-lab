






$(document).ready(function(){
// $('#submit').click(function(event){
// 	event.preventDefault();
var thing;

	var kitty = $.get( "https://ga-cat-rescue.herokuapp.com/api/cats")
		.done(function(data){
		 thing = JSON.parse(kitty.responseText);
		 var catUl = $('#cats');
		 for(i=0; i<thing.length; i++){
		 var catList = document.createElement("li");
		 catList.appendChild(thing[i]);
		 catUl.appendChild(catList);
		}
	});
	
});
