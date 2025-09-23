import example from "@components/example";
import loader from "@ts/loader";

const components = [example];

document.addEventListener("DOMContentLoaded", () => {
	jQuery(() => {
		// @ts-ignore
		loader(components);
	});
});
