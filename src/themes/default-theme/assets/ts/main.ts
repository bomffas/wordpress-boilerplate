import loader from "@ts/loader";
import example from "@components/example";

const components = [example];

document.addEventListener("DOMContentLoaded", () => {
	jQuery(() => {
		// @ts-ignore
		loader(components);
	});
});
