export default class Example {
	static controllerName = "example";

	static selectors: {
		galleryContainer: string;
		galleryPages: string;
		nextSlide: string;
		prevSlide: string;
	} = {
		galleryContainer: '[data-js="gallery"]',
		galleryPages: '[data-js="gallery-pages"]',
		nextSlide: '[data-js="previous"]',
		prevSlide: '[data-js="next"]',
	};
	private $galleryContainer: JQuery<HTMLElement>;
	private $galleryPages: JQuery<HTMLElement>;
	private $nextSlide: JQuery<HTMLElement>;
	private $prevSlide: JQuery<HTMLElement>;

	constructor() {
		this.$galleryContainer = jQuery(Example.selectors.galleryContainer);
		this.$galleryPages = jQuery(Example.selectors.galleryPages);
		this.$nextSlide = jQuery(Example.selectors.nextSlide);
		this.$prevSlide = jQuery(Example.selectors.prevSlide);
	}

	bind(): void {
		this.controlMenu();
	}

	connect(): void {}

	controlMenu(): void {
		this.$galleryContainer.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			speed: 500,
			fade: true,
			cssEase: "linear",
			adaptiveHeight: true,
		});

		this.$galleryContainer.on(
			"init reInit afterChange",
			(_event, slick, currentSlide: number) => {
				const i = (currentSlide ? currentSlide : 0) + 1;
				this.$galleryPages.text(`${i} / ${slick.slideCount}`);
			},
		);

		this.$prevSlide.on("click", () => {
			this.$galleryContainer.slick("slickNext");
		});

		this.$nextSlide.on("click", () => {
			this.$galleryContainer.slick("slickPrev");
		});
	}
}
