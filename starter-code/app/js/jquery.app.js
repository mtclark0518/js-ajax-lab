
var catUl = $('#cats');
var parsedShit;
var OutgoingCat;

$(document).ready(function(){


	//pulls user data
	OutgoingCat = function(){
		this.name = $('#cat-name').val();
		this.note = $('#cat-note').val();
	};
	
	//////////////
	//USER CLICK/
	$('#submit').click(function(event){
		event.preventDefault();
		var userCat = new OutgoingCat();
		var userString = JSON.stringify(userCat);
		console.log(userString);
		
		//add user data to db
		$.ajax({
			type: "post",
			url: "https://ga-cat-rescue.herokuapp.com/api/cats",
		 	data: userString,
			success: function(){
		 		location.reload();
		 	}
		});
	});

	//gets data from db
	var kitty = $.get( "https://ga-cat-rescue.herokuapp.com/api/cats")
		.done(function(data){
		 parsedShit = JSON.parse(kitty.responseText);
		 for(i=0; i<thing.length; i++){
		 var catList = document.createElement("li");
		 catList.append(parsedShit[i].name + " - " + parsedShit[i].note);
		 catUl.append(catList);
		}
	});

});
