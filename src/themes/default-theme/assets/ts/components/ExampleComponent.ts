import type { ComponentController } from "@ts/loader";

export default class ExampleComponent implements ComponentController {
  static controllerName = "controller-name";

  selectors: Record<string, string> = {
    exampleSelector: '[data-js="example-selector"]'
  };

  $controller!: JQuery<HTMLElement>;
  exampleSelector!: JQuery<HTMLElement>;
  [key: string]: unknown;

  bind(): void {}

  connect(): void {}
}
