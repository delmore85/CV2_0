$(document).ready(function(){
	var $image = $('.nav2 .container .row .col-sm-8 p')
	var $one = $('.nav2 .container .row .col-sm-4 .one');
	var $two = $('.nav2 .container .row .col-sm-4 .two');
	var $three = $('.nav2 .container .row .col-sm-4 .three');
	var $four = $('.nav2 .container .row .col-sm-4 .four');
	var $five = $('.nav2 .container .row .col-sm-4 .five');
	var $six = $('.nav2 .container .row .col-sm-4 .six');
	var $seven = $('.nav2 .container .row .col-sm-4 .seven');
	var $eight = $('.nav2 .container .row .col-sm-4 .eight');
	var $nine = $('.nav2 .container .row .col-sm-4 .nine');
	var $ten = $('.nav2 .container .row .col-sm-4 .ten');

	
	$one.click(function(){
		$image.fadeToggle(5000);
	});

	$two.click(function(){
		$image.html('<img src="resource/cat.jpg" alt="Cat Image" />');
    });
   	$three.click(function(){
		$image.html('<img src="resource/jquery.gif" alt="jQuery Image" />');
    });
	$four.click(function(){
		$image.slideToggle('1000');
	});
	$five.click(function(){
		$image.animate({top:'-100px'});
		$image.animate({top:'100px'});
		$image.animate({top:'0px'});
		$image.animate({left:'100px'});
		$image.animate({left:'-100px'});
		$image.animate({left:'0px'});

    });
	$six.click(function(){
 		$image.animate({top:'-100px'}, 'fast');
		$image.animate({top:'0px'}, 'fast');
 		$image.animate({top:'-50px'}, 'fast');
		$image.animate({top:'0px'}, 'fast');
 		$image.animate({top:'-25px'}, 'fast');
		$image.animate({top:'0px'}, 'fast');
 		$image.animate({top:'-10px'}, 'fast');
		$image.animate({top:'0px'}, 'fast');

	});
	$seven.click(function(){
		$image.append('<img src="resource/cat.jpg" alt="Cat Image" class="cat" />');
	});
	$eight.click(function(){
		$('.cat').remove();
	});
	$nine.click(function(){
		$('.nav2 .container .row .col-sm-8 p img').css("height","100%");
		$('.nav2 .container .row .col-sm-8 p img').css("width","100%");
	});
	$ten.click(function(){
		$('.nav2 .container .row .col-sm-8 p img').animate({height: '100%'}, '1500');
		$('.nav2 .container .row .col-sm-8 p img').animate({width: '100%'}, '1500');
	});

});
