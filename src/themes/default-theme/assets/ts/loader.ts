// @ts-nocheck
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const createController = (controller: any, $e: any) => {
	if (!controller) {
		return;
	}

	const c = new controller();
	c.$controller = $e;

	if (controller.selectors) {
		jQuery.each(controller.selectors, (key, selectors) => {
			const selectorName = `$${String(key)}`;

			c[selectorName] = $e.find(selectors);
		});
	}

	//
	// Initialize
	//
	const settings = $e.data("settings");
	if (settings) {
		c.settings = $.extend({}, c.settings, settings);
	}

	if (c.connect) {
		c.connect();
	}

	if (c.bind) {
		c.bind();
	}
};

// @ts-ignore
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export default (controllers: any) => {
	jQuery("[data-component]").each((_i, e) => {
		const $e = jQuery(e);
		const controllerName = $e.data("component");
		const controllerMatch = (_) => _.controllerName === controllerName;
		const controller = controllers.filter(controllerMatch)[0];
		createController(controller, $e);
	});
};
