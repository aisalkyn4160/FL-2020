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
	$('.rew-inner').slick({
		arrows:false,
		dots:true,
		infinite:false,
		slidesToShow:1,
	});
	$('.reviews__slider').slick({
		arrows:true,
		dots:true,
		infinite:true,
		slidesToShow:3, 
	});
})


