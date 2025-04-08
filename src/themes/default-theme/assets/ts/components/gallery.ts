export default class Gallery {
	static controllerName = "gallery";

	static selectors: {
		galleryContainer: string;
	} = {
		galleryContainer: '[data-js="gallery"]',
	};
	private $galleryContainer: JQuery<HTMLElement>;

	constructor() {
		this.$galleryContainer = jQuery(Gallery.selectors.galleryContainer);
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
		});
	}
}
