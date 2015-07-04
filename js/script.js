	
$( document ).ready(function() {
    

	//reveal elements

	$( window ).load(function() {
		$('header, main, .parallax_container').attr('id', 'reveal');
		// $('.parallax').one('transitionend', function(e) {
			// $('.parallax').css('transition','none');

		// });

	});


	//click navigation

	var navHeight = $('nav').outerHeight();

	$("nav ul li").on("click",function (e){
		$(this).addClass('selected').siblings().removeClass('selected');
		
		var targetContent = $(this).data('navigation-item');
		var topPosition = $('.content-' + targetContent).offset().top;
		var navHeight = 75;

		$('body').animate({
		scrollTop: topPosition 
		});

	});

/* Below is the delay function */

	$(window).scroll(function(){

		var wScroll = $(this).scrollTop();

		if(wScroll > $('.about').offset().top - ($(window).height()/1.5)){

			$('.parallax_2 img, .about .container h2').attr('id', 'reveal');
			

			$('.about .container li').each(function(i){
				$(this).attr('id', 'reveal');
				var timeDelay = 0.2*i;
				$(this).css("transition-delay", timeDelay +"s");
			});
		}

		if(wScroll < $('.about').offset().top - ($(window).height()/1.5)){
			
			$('.about h2, .about .container li').removeAttr('id', 'reveal');

		}


	});


/* Below is the Parallax function */
	
	$(window).scroll(function(){

		var wScroll = $(this).scrollTop();
		
		$('.parallax').css({'transform' : 'translate(0px, ' + wScroll/15 + '%)'});
		

	});


});
