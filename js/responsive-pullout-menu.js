$(function(){

	var position = 0; //current status of side menu, 0 = closed, 1 = open
	var speed = 150; //in ms
	var wrapper = $('#wrapper');
	var wrapper_overlay = $('#wrapper #overlay');
	var nav_left = $('nav#left');

	function open_menu() {
		nav_left.animate({"margin-left": '+=240px'}, speed);
		wrapper.animate({"margin-left": '+=240px'}, speed);
		wrapper_overlay.show();
		position = 1;
	}

	function close_menu(){
		nav_left.animate({"margin-left": '-=240px'}, speed);
		wrapper.animate({"margin-left": '-=240px'}, speed);
		wrapper_overlay.hide();
		position = 0;
	}

	//listen for button click to expand/fold menu
	$('#responsive-btn').click(function(){
		if(position == 0){
			open_menu();
		}else{
			close_menu();
		}
	});

	//prevent scrolling when expanded
	$('html,body').on({
		'mousewheel' : function(e) {
			if(position) {
				e.preventDefault();
				e.stopPropagation();
			}
		},
		'mousedown' : function(e) {
			if(e.which == 2 && position) {
				e.preventDefault();
				e.stopPropagation();
			}
		}
	});

	//if the user clicks the overlay, we should close the menu
	wrapper_overlay.click(function(){
		close_menu();
	});

});