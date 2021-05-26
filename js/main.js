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
	var name = document.getElementById("nama").value;
	function promptSubmitFeedback(){
		alert("Thank you " + nama + " for your feedback about us.");
	}


	var person = document.getElementById("org").value;
	var date = document.getElementById("tgl").value;
	var time = document.getElementById("jam").value;
	function promptSubmitReservation(){
		alert("A table for" + person + " person on " + date + "at" + time + " has been reserved for you.");
	}
