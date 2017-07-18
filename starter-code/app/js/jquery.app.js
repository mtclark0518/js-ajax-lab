





var catUl = $('#cats');
$(document).ready(function(){


var OutgoingCat = function(){
	this.name = $('#cat-name').val();
	this.note = $('#cat-note').val();
	};
	

$('#submit').click(function(event){
	event.preventDefault();

	var userCat = new OutgoingCat();
	var userString = JSON.stringify(userCat);
	console.log(userString);
		$.ajax({
			type: "post",
			url: "https://ga-cat-rescue.herokuapp.com/api/cats",
		 	data: userString,
			success: function(){
		 		location.reload();
		 	}
		 });


		});
	

	// document.createElement('li');
	// userCats.append(userInput);
	// catUl.append(userCats);
	// console.log(userInput);







var thing;

	var kitty = $.get( "https://ga-cat-rescue.herokuapp.com/api/cats")
		.done(function(data){
		 thing = JSON.parse(kitty.responseText);
		 for(i=0; i<thing.length; i++){
		 var catList = document.createElement("li");

		 catList.append(thing[i].name + " - " + thing[i].note);
		 catUl.append(catList);
		}
	});
	


});
