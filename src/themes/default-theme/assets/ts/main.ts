import loader from "./loader";
import gallery from "./components/gallery";
import menu from "./components/menu";
import beforeAfter from "./components/before-after.ts";
import projects from "./components/projects.ts";
import splash from "./components/splash.ts";

const components = [menu, gallery, beforeAfter, projects, splash];

document.addEventListener("DOMContentLoaded", () => {
	jQuery(() => {
		loader(components);
	});
});
