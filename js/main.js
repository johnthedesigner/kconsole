// MENU BEHAVIOR
$(window).load(function(){
	setTimeout(function(){
		$('.select-menu').click(function(){
			console.log('toggle select-menu');
			$(this).toggleClass('open');
		});
	},500);
});