export default class Splash {
	static controllerName = "splash";

	static selectors: {
		splashButton: string;
	} = {
		splashButton: '[data-js="enter-site"]',
	};
	private $splashButton: JQuery<HTMLElement>;

	constructor() {
		this.$splashButton = jQuery(Splash.selectors.splashButton);
	}

	bind(): void {
		this.controlVisibility();
	}

	connect(): void {}

	controlVisibility(): void {
		this.$splashButton.on("click", () => {
			// @ts-ignore
			this.$controller.addClass("hide");
		});
	}
}
