//$(document).foundation();
$(document).ready(function(){

	var div = $('div:first');

	$('.div-pregunta').on('click', function(){
		
		$('body').animate({scrollTop:0}, '500', 'swing', function() { 
		  
		});
		$("#pantalla-preguntas").fadeOut(300).done(
		$('#pantalla-resultado').fadeIn(1400)
		);
		
	});

});
