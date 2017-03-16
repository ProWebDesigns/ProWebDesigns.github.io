
// alert('Funciona chingado');

$(document).ready(function(){
	$('.menu li:has(ul)').click(function(e){
		e.preventDefault();

		if ($(this).hasClass('activaded')){
			$(this).removeClass('activaded');
			$(this).children('ul').slideUp();
		} 
		else {
			$('.menu li ul').slideUp();
			$('.menu li').removeClass('activaded');
			$(this).addClass('activaded');
			$(this).children('ul').slideDown();
		}

	});

	$('.btn-menu').click(function(){
		$('.container-menu .menu').slideToggle();
	});

	$('.menu li ul li a').click(function(){
		// body...
		window.location.href = $(this).attr("href");
	});
});
