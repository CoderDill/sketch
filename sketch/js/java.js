$('document').ready(function(){
	

	var boxSize = 16;
	var size = 480 / boxSize; 
	
	for (var i=0; i<boxSize; i++){
		for (var j=0; j<boxSize; j++) {
			$("#container").append("<div class='squares'></div>");
			
		}
	}
		$(".squares").css("height", size);
		$(".squares").css("width", size);

  
  $('.squares').mouseenter(function(){
  	$(this).addClass('color');
  })  

  $('#clear').on('click', function(){
  	$('.squares').removeClass('color');
  })
  

$('#new').on('click', function(){
	$('#container').empty();

var boxSize = prompt("Enter grid amount.");
	var size = 480 / boxSize; 
	for (var i=0; i<boxSize; i++){
		for (var j=0; j<boxSize; j++) {
			$("#container").append("<div class='squares'></div>");
			
		}
	}
	$(".squares").css("height", size);
	$(".squares").css("width", size);

  
  $('.squares').mouseenter(function(){
  	$(this).addClass('color');
  })  

  $('#clear').on('click', function(){
  	$('.squares').removeClass('color');
  	})
  })
});



