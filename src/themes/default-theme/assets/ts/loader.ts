export interface ComponentController {
  settings?: Record<string, unknown>;
  connect?: () => void;
  bind?: () => void;
  selectors?: Record<string, string>;
  $controller?: JQuery<HTMLElement>;
  [key: string]: unknown;
}

export interface ControllerEntry {
  controllerName: string;
  controller: new () => ComponentController;
}

const createController = (
  controllerEntry: ControllerEntry | undefined,
  $e: JQuery<HTMLElement>
): void => {
  if (!controllerEntry) {
    return;
  }

  const c = new controllerEntry.controller();
  c.$controller = $e;

  if (c.selectors) {
    jQuery.each(c.selectors, (key, selectors) => {
      const selectorName = `$${String(key)}`;
      c[selectorName] = $e.find(selectors);
    });
  }

  const settings = $e.data("settings");
  if (settings) {
    c.settings = $.extend({}, c.settings, settings);
  }

  c.connect?.();
  c.bind?.();
};

export default (controllers: ControllerEntry[]): void => {
  jQuery("[data-component]").each((_i, e) => {
    const $e = jQuery(e);
    const controllerName = $e.data("component");
    const controllerEntry = controllers.find((c) => c.controllerName === controllerName);
    createController(controllerEntry, $e);
  });
};
