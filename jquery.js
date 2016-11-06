$(document).ready(function(){

$("#AddBtn").on("click", function(){
		var value = $("#input").val();
		if(value !==""){
			$("#list").append("<li>" + value + "</li>");
		}
	});

});
