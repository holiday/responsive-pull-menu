$(function(){

	var position = 0; //current status of side menu, 0 = closed, 1 = open
	var speed = 150; //in ms

	$('#responsive-btn').click(function(){
		if(position == 0){
			$('nav#left').animate({"margin-left": '+=240px'}, speed);
			$('#wrapper').animate({"margin-left": '+=240px'}, speed);
			position = 1;
		}else{
			$('nav#left').animate({"margin-left": '-=240px'}, speed);
			$('#wrapper').animate({"margin-left": '-=240px'}, speed);
			position = 0;
		}
		
	});
});