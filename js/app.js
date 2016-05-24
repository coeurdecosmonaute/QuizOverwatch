//$(document).foundation();
$(document).ready(function(){

	$('.div-pregunta').on('click', function(){
		$("#pantalla-preguntas").fadeOut(300).done(
		$('#pantalla-resultado').fadeIn(1400)		)
		
	});

});
