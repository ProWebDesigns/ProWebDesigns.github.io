// alert("hola mundin")

$(document).ready(main);

var menu = true;

function main(){
	$('.menu-bar').click(function () {
		// body...
		// $('nav').toggle();
		if (menu) {
			$('nav').animate({
				left:'0'
			});
			menu = false;
		} else {
						$('nav').animate({
				left:'-100%'
			});
			menu = true;
		};
	});
}
