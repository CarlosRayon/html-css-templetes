window.addEventListener(
	'load',
	function () {
		document.querySelector('.menu-btn').addEventListener('click', function () {
			document.querySelector('.nav-menu').classList.toggle('show');
		});
	},
	true
);

/* Scroll reveal */

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });