import loader from "@/loader.ts";
import gallery from "@components/gallery.ts";
import menu from "@components/menu.ts";
import beforeAfter from "@components/before-after.ts";
import projects from "@components/projects.ts";
import splash from "@components/splash.ts";

const components = [menu, gallery, beforeAfter, projects, splash];

document.addEventListener("DOMContentLoaded", () => {
	jQuery(() => {
		// @ts-ignore
		loader(components);
	});
});
