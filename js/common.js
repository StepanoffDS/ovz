const phoneMask = window.addEventListener("DOMContentLoaded", function () {
	[].forEach.call(document.querySelectorAll('[data-tel-input]'), function (input) {
		let keyCode;
		function mask(event) {
			event.keyCode && (keyCode = event.keyCode);
			let pos = this.selectionStart;
			if (pos < 3) event.preventDefault();
			let matrix = "+7 (___) ___-__-__",
				i = 0,
				def = matrix.replace(/\D/g, ""),
				val = this.value.replace(/\D/g, ""),
				new_value = matrix.replace(/[_\d]/g, function (a) {
					return i < val.length ? val.charAt(i++) : a
				});
			i = new_value.indexOf("_");
			if (i != -1) {
				i < 5 && (i = 3);
				new_value = new_value.slice(0, i)
			}
			let reg = matrix.substr(0, this.value.length).replace(/_+/g,
				function (a) {
					return "\\d{1," + a.length + "}"
				}).replace(/[+()]/g, "\\$&");
			reg = new RegExp("^" + reg + "$");
			if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
				this.value = new_value;
			}
			if (event.type == "blur" && this.value.length < 5) {
				this.value = "";
			}
		}

		input.addEventListener("input", mask, false);
		input.addEventListener("focus", mask, false);
		input.addEventListener("blur", mask, false);
		input.addEventListener("keydown", mask, false);

	});

});

$(function () {
	$('.popup-item .info .info-block .name').click(function () {
		$(this).next('.text').slideToggle();
	});
	$('.faq-block .item .name').click(function () {
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
	// Добавление карточки в каталог
	$('.fav-link').click(function () {
		this.classList.toggle('fav-link--added')
	});
	// Изменение карточек в catalog.html
	$('.sort-type').click(function () {
		const $itemsSortArr = document.querySelectorAll('.sort-type')
		$itemsSortArr.forEach(element => {
			if (element.classList.contains('active')) {
				element.classList.remove('active')
			}
		});
		this.classList.add('active')

		$siteItemArr = document.querySelectorAll('.item-section')
		if (this.classList.contains('sort-type--default')) {
			$siteItemArr.forEach(e => {
				e.classList.remove('list')
				e.classList.remove('full')
			})
		}
		if (this.classList.contains('sort-type--full')) {
			$siteItemArr.forEach(e => {
				e.classList.remove('list')
				e.classList.add('full')
			})
		}
		if (this.classList.contains('sort-type--list')) {
			$siteItemArr.forEach(e => {
				e.classList.remove('full')
				e.classList.add('list')
			})
		}
		// $siteItemArr = document.querySelectorAll('.site-item')

	});
	$('body').on('click', '.password-control', function () {
		if ($('#password-input').attr('type') == 'password') {
			$(this).toggleClass('other');
			$('#password-input').attr('type', 'text');
		} else {
			$(this).toggleClass('other');
			$('#password-input').attr('type', 'password');
		}
		return false;
	});
	$('body').on('click', '.password-control2', function () {
		if ($('#password-input2').attr('type') == 'password') {
			$(this).toggleClass('other');
			$('#password-input2').attr('type', 'text');
		} else {
			$(this).toggleClass('other');
			$('#password-input2').attr('type', 'password');
		}
		return false;
	});
	$('body').on('click', '.password-control3', function () {
		if ($('#password-input3').attr('type') == 'password') {
			$(this).toggleClass('other');
			$('#password-input3').attr('type', 'text');
		} else {
			$(this).toggleClass('other');
			$('#password-input3').attr('type', 'password');
		}
		return false;
	});
	// $('.notifications-page .item').click(function () {
	// 	$(this).toggleClass('opened');
	// });
	$('.menubg').click(function () {
		$('.menubg').fadeOut();
		$('.mobile-menu').removeClass('opened');

	});
	$('.header .menu-button').click(function () {
		$('.menubg').fadeIn();
		$('.mobile-menu').addClass('opened');
		document.querySelector('.menubg').addEventListener('touchmove', () => {
			$('.menubg').fadeOut();
			$('.mobile-menu').removeClass('opened');
		})
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
	$('.popup-link').on('click', function () {
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