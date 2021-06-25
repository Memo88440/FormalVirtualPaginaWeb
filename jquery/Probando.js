$(document).ready(function(){
	var altura = $('.container-fluide').offset().top;

	alert("La altura es: "+altura);


	$(window).on('scroll', function(){

		if($(window).scrollTop() > altura){
			
			$('.container-fluide').addClass('navbarr');
			
		} else{
			$('.container-fluide').removeClass('navbarr');

		}

	});

