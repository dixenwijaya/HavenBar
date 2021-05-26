$(document).ready(function(){

	//fancybox.js init
	$('.fancybox').fancybox({
		openEffect : 'none',
		closeEffect : 'none',
		prevEffect : 'none',
		nextEffect : 'none',

		arrows : false,
		helpers : {
			media : {},
			buttons : {}
		}
	});

	//wow.js init
	wow = new WOW(
	    {
		  animateClass: 'animated',
		  mobile: false,
		  offset: 100
		}
	);
	wow.init();

});

	//submitprompt init
	function promptSubmitFeedback(){
		alert("Thank you for your feedback about us.")
	}

	function promptSubmitReservation(){
		alert("A table has been reserved for you.")
	}
