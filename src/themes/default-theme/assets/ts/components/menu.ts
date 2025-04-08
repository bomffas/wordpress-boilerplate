export default class Menu {
	static controllerName = "menu";

	static selectors: {
		menuContent: string;
		menuContainer: string;
	} = {
		menuContainer: '[data-js="menu"]',
		menuContent: ".menu-menu-principal-container",
	};
	private $menuContent: JQuery<HTMLElement>;
	private $menuContainer: JQuery<HTMLElement>;

	constructor() {
		this.$menuContent = jQuery(Menu.selectors.menuContent);
		this.$menuContainer = jQuery(Menu.selectors.menuContent);
	}

	bind(): void {
		this.controlMenu();
	}

	connect(): void {}

	controlMenu(): void {
		const buttonToClose = jQuery(
			'<button title="Fechar Menu" class="header__close-menu">Fechar Menu</button>',
		);

		const buttonToOpen = jQuery(
			`<button title="Abrir Menu" class="header__open-menu">
				<span class="header__menu-span"></span>
				<span class="header__menu-span"></span>
				<span class="header__menu-span"></span>
			</button>`,
		);

		/** Open Button **/
		jQuery(this.$menuContainer).append(buttonToOpen);
		buttonToOpen.on("click", () => {
			this.$menuContent.addClass("menu-show");
		});

		/** Close Button **/
		jQuery(this.$menuContent).append(buttonToClose);
		buttonToClose.on("click", () => {
			this.$menuContent.removeClass("menu-show");
		});
	}
}
