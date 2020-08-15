$(document).ready(function(){
	$('.step-inner').slick({
		arrows:false,
		dots:true,
		infinite:false,
	});

	$('.diff-inner').slick({
		arrows:false,
		dots:true,
		infinite:false,
	});
	$('.eq-inner').slick({
		arrows:false,
		dots:true,
		infinite:false,
	});
	$('.examples__wrapper').slick({
		arrows:true,
		dots:false,
		infinite:false, 
	});
	$('.rew-inner').slick({
		arrows:false,
		dots:true,
		infinite:false,
	});
	$('.reviews__slider').slick({
		arrows:true,
		dots:true,
		infinite:true,
		slidesToShow:3, 
	});
})


