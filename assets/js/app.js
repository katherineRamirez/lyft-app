$(document).ready(function(){
	$('#header').hide(5000);
	$('#first-section').show(2000);

	$('.btn2').click(function(){
	var formContainer = $('#formSingUp');
	var title = "Sing Up";
	var subtitle = "Join now for free ride credit";
	formContainer.append('<div class="form-country"><h3 class="title-form">' + title +
	'</h3><p class="text-form">' + subtitle +
	'</p><hr class="line-form"><div class="dropdown"><button class="btn btn-default dropdown-toggle" type="button"	id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><span class="caret"></span></button></div>' + '<img class="country" src="assets/img/chile.png">' +
		'<input class="input-country" placeholder="56">' + '<button class="next">Next</button>' )
});
});





