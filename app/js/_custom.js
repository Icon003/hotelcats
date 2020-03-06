document.addEventListener("DOMContentLoaded", function() {
	let modal = document.querySelector('#modal');
	let buttonOpenModal = document.querySelector('#buttonOpenModal');
	let buttonCloseModal = document.querySelector('#buttonCloseModal');
	let body = document.querySelector('body');

	function modalF() {
		body.classList.toggle('stop-scroling');
		modal.classList.toggle('modal--open');
	}

	buttonOpenModal.addEventListener('click', () => { modalF(); });
	buttonCloseModal.addEventListener('click', () => { modalF(); });

});

new Glider(document.querySelector('#sliderNumber'), {
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: '#paginationNumber',
	draggable: true,
	rewind: true,
	arrows: {
	  prev: '#prevSlideNumber',
	  next: '#nextSlideNumber'
	}
  });

new Glider(document.querySelector('#sliderReviews'), {
	slidesToShow: 1,
	slidesToScroll: 1,
	itemWidth: 205,
	draggable: true,
	rewind: true,
	dots: '#paginationReviews',
	arrows: {
		prev: '#prevSlideReview',
		next: '#nextSlideReview'
	},
	responsive: [
		{
			breakpoint: 0,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				itemWidth: 290
			}
		},
		{
			breakpoint: 601,
			settings: {
				slidesToShow: 1.5,
				slidesToScroll: 1.5,
			}
		},
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2.3,
				slidesToScroll: 2,
			}
		}
	]
});