$(function(){
	$('.popup-item .info .info-block .name').click(function() {
		$(this).next('.text').slideToggle();
	});
	$('.faq-block .item .name').click(function() {
		$(this).toggleClass('active');
		$(this).next('.text').slideToggle();
	});
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
	$('body').on('click', '.password-control', function(){
		if ($('#password-input').attr('type') == 'password'){
			$(this).toggleClass('other');
			$('#password-input').attr('type', 'text');
		} else {
			$(this).toggleClass('other');
			$('#password-input').attr('type', 'password');
		}
		return false;
	}); 
	$('body').on('click', '.password-control2', function(){
		if ($('#password-input2').attr('type') == 'password'){
			$(this).toggleClass('other');
			$('#password-input2').attr('type', 'text');
		} else {
			$(this).toggleClass('other');
			$('#password-input2').attr('type', 'password');
		}
		return false;
	}); 
	$('body').on('click', '.password-control3', function(){
		if ($('#password-input3').attr('type') == 'password'){
			$(this).toggleClass('other');
			$('#password-input3').attr('type', 'text');
		} else {
			$(this).toggleClass('other');
			$('#password-input3').attr('type', 'password');
		}
		return false;
	}); 
	$('.notifications-page .item').click(function() {
		$(this).toggleClass('opened');
	});
	$('.menubg').click(function() {
		$('.menubg').fadeOut();
		$('.mobile-menu').removeClass('opened');
	});
	$('.header .menu-button').click(function() {
		$('.menubg').fadeIn();
		$('.mobile-menu').addClass('opened');
	});
	$('.site-item .images').slick({
		arrows: false,
		dots: true
	});
	$('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  vertical: true,
	  focusOnSelect: true
	});
	$('.items-slider-block .list').slick({
	  slidesToShow: 4,
	  swipe: false,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 576,
	      settings: {
	        slidesToShow: 1,
	        arrows: false,
	        dots: true
	      }
	    }
	  ]
	});
	$('.slider-for2').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  asNavFor: '.slider-nav2'
	});
	$('.slider-nav2').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for2',
	  vertical: true,
	  focusOnSelect: true
	});
	$('.popup-link').on('click', function() {
		$('.slider-nav2').slick('refresh');
		$('.slider-for2').slick('refresh');
	});
	$('.popular-categories-block .list').slick({
	  slidesToShow: 4,
	  swipe: false,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 576,
	      settings: {
	      	variableWidth: true
	      }
	    }
	  ]
	});
});