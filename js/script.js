	
$( document ).ready(function() {
    

	//reveal elements

	$( window ).load(function() {
		$('header, main, .parallax_container').attr('id', 'reveal');
		

	});


	//click navigation

	var navHeight = $('nav').outerHeight();

	$("nav ul li, .nav-flap ul li").on("click", function (){

		$(this).siblings().removeClass('selected');
		$(this).siblings().removeClass('hvr-underline-reveal');
		// $(this).addClass('selected');
		$(this).addClass('hvr-underline-reveal');
		var targetContent = $(this).data('navigation-item');
		var topPosition = $('.content-' + targetContent).offset().top;
		var navHeight = 75;

		$('body').animate({
		scrollTop: topPosition 
		});

	});


	// toggle hamburger menu

	
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
		$('.nav-flap').toggleClass('reveal');

	});



	$(window).scroll(function(){

		var wScroll = $(this).scrollTop();

		// Below is the Parallax effect------------------------------------------	
		$('.parallax_container .parallax').css({
			'-webkit-transform' : 'translate(0px, ' + wScroll/15 + '%)',
			'transform' : 'translate(0px, ' + wScroll/15 + '%)'});

		$('header').css('background-color', 'rgba(35,34,40,0.9)');

		// Below is the fade in for About contents------------------------------------------
		if(wScroll > $('.about').offset().top - ($(window).height()/1.5)){

			$('.parallax_2 img, .about .container h2').attr('id', 'reveal');
			

			$('.about .container li').each(function(i){
				$(this).attr('id', 'reveal');
				var timeDelay = 0.2*i;
				$(this).css("transition-delay", timeDelay +"s");
			});
		}else {$('.about h2, .about .container li').removeAttr('id', 'header #reveal');}

		// Below is the fade in for App contents-----------------------------------------
		if(wScroll > $('.app').offset().top - ($(window).height()/1.5)){
		 	$('.phone img').attr('id', 'reveal');

		 	$('.app_content .right_container ul li').each(function(i){
				$(this).attr('id', 'reveal');
				var timeDelay = 0.2*i;
				$(this).css("transition-delay", timeDelay +"s");
			});
		}else {$('.phone img').removeAttr('id', 'header #reveal'),$('.app_content .right_container ul li').removeAttr('id', 'header #reveal');}



		// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

		// Below is the fade in & out Spec Contents -------------------------------------

		var specClass = $('.specs .middle_container, .specs .right_container');

		if(wScroll > $('.specs').offset().top - ($(window).height()/1.5)){
		 	
		 	
		 	specClass.attr('id', 'reveal');

		 	specClass.each(function(i){
				$(this).attr('id', 'reveal');
				var timeDelay = 0.2*i;
				$(this).css("transition-delay", timeDelay +"s");
			});
		}else {specClass.removeAttr('id', 'header #reveal');}



		// below controls the navigation switch--------------------------------
		var removeClass = $('header .links ul li').removeClass('selected');

		if( wScroll < $('.about').offset().top){
			removeClass
			$('header .links ul li:first-child').addClass('selected');
		
		}

		if(wScroll > $('.about').offset().top - 5 && wScroll < $('.about').offset().top + $('.about').outerHeight()){
			removeClass
			$('header .links ul li:nth-child(2)').addClass('selected');
		
		}

		if(wScroll > $('.app').offset().top - 5 && wScroll < $('.app').offset().top + $('.app').outerHeight()){
			removeClass
			$('header .links ul li:nth-child(3)').addClass('selected');
		
		}

		if(wScroll > $('.shop').offset().top - 5 && wScroll < $('.shop').offset().top + $('.shop').outerHeight()){
			removeClass
			$('header .links ul li:nth-child(5)').addClass('selected');
		
		}
		if(wScroll > $('.specs').offset().top - 5 && wScroll < $('.specs').offset().top + $('.specs').outerHeight()){
			removeClass
			$('header .links ul li:nth-child(4)').addClass('selected');
		
		}

	});


});

