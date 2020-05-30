// ======================= Убирает плейсхолдерс с Your Name ==============
let inptUserName = document.getElementById('userName');


inptUserName.onfocus = function removePlaceholder () {
	inptUserName.removeAttribute('placeholder');
}
inptUserName.onblur = function setPlaceholder () {
	inptUserName.setAttribute('placeholder',"Your Name");
}
//========================== Убирает плейсхолдерс с Your Email ==========================================
let inptUserEmail = document.getElementById('usermail');


inptUserEmail.onfocus = function removePlaceholder () {
	inptUserEmail.removeAttribute('placeholder');
}
inptUserEmail.onblur = function setPlaceholder () {
	inptUserEmail.setAttribute('placeholder',"Your Email");

}//========================== Убирает плейсхолдерс с Your Message ==========================================
let inptUserText = document.getElementById('usertext');


inptUserText.onfocus = function removePlaceholder () {
	inptUserText.removeAttribute('placeholder');
}
inptUserText.onblur = function setPlaceholder () {
	inptUserText.setAttribute('placeholder',"Your Message");
}

//======================================== BURGER ===========================================================
let burger = document.querySelector('.burger');
let menu = document.querySelector('.menu');

burger.onclick = function toggleClassActive () {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
}
//=========================================== SLICK SLIDER  ====================
$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		// asNavFor: ".award__slider",
		dots: true,
		// adaptiveHight:true,
		slidesToShow:2,
		slidesToScroll:2,
		speed:1000,
		easing:'ease',
		infinite:true,
		responsive:[
			{
				breakpoint: 670,
				settings: {
					slidesToShow:1,
					slidesToScroll:1,
					arrows:false,
				}
			}
		]
	});
});

//=============================================== Inputs =============================