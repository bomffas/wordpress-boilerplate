import loader from "@ts/loader";
import type { ControllerEntry } from "@ts/loader";
import ExampleComponent from "@components/ExampleComponent.ts";

const components: ControllerEntry[] = [
  { controllerName: ExampleComponent.controllerName, controller: ExampleComponent }
];

document.addEventListener("DOMContentLoaded", () => {
  jQuery(() => {
    loader(components);
  });
});
