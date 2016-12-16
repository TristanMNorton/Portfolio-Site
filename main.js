$(function(){
	var $main = $('main');

	$('.hometrigger').on('click', function(){
		$main.css('margin-left', '0%');
	});
	$('#biolink').on('click', function(){
		$main.css('margin-left', '-100%');
	});
	$('#portlink').on('click', function(){
		$main.css('margin-left', '-200%');
	});
	$('#contactlink').on('click', function(){
		$main.css('margin-left', '-300%');
	});
});
