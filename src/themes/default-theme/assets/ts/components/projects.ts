// @ts-ignore
// @ts-nocheck
interface IProject {
	link: string;
	title: {
		rendered: string;
	};
	about: {
		thumbnail: string;
		category: string;
	};
}
export default class Projects {
	static controllerName = "projects";

	static selectors: {
		projectsContainer: string;
		projectsCategories: string;
		projectsLoaderMore: string;
		projectsCategoriesOpen: string;
		projectsCategoriesClose: string;
		projectsCategoriesContainer: string;
	} = {
		projectsContainer: '[data-js="content-project"]',
		projectsCategories: "[data-category]",
		projectsLoaderMore: "[data-js='loader-more']",
		projectsCategoriesOpen: '[data-js="open-categories"]',
		projectsCategoriesClose: '[data-js="close-categories"]',
		projectsCategoriesContainer: '[data-js="container-categories"]',
	};
	private readonly $projectsContainer: JQuery<HTMLElement>;
	private readonly $projectsCategories: JQuery<HTMLElement>;
	private readonly $projectsLoaderMore: JQuery<HTMLElement>;
	private readonly $projectsCategoriesOpen: JQuery<HTMLElement>;
	private readonly $projectsCategoriesClose: JQuery<HTMLElement>;
	private readonly $projectsCategoriesContainer: JQuery<HTMLElement>;
	private currentCategory: string;
	private currentPage: number;

	constructor() {
		this.$projectsContainer = jQuery(Projects.selectors.projectsContainer);
		this.$projectsCategories = jQuery(Projects.selectors.projectsCategories);
		this.$projectsLoaderMore = jQuery(Projects.selectors.projectsLoaderMore);
		this.$projectsCategoriesContainer = jQuery(
			Projects.selectors.projectsCategoriesContainer,
		);
		this.$projectsCategoriesOpen = jQuery(
			Projects.selectors.projectsCategoriesOpen,
		);
		this.$projectsCategoriesClose = jQuery(
			Projects.selectors.projectsCategoriesClose,
		);
		this.currentPage = 1;
		this.currentCategory = "";
	}

	bind(): void {
		this.triggerGetProject();
		this.$projectsLoaderMore.on("click", (button) => {
			this.currentPage = jQuery(button.currentTarget).data("page");
			this.getProjects();
		});
		this.$projectsCategoriesOpen.on("click", () => {
			this.$projectsCategoriesContainer.addClass("show");
		});
		this.$projectsCategoriesClose.on("click", () => {
			this.$projectsCategoriesContainer.removeClass("show");
		});
	}

	connect(): void {}

	triggerGetProject(): void {
		this.$projectsCategories.on("click", (button) => {
			const currentCategory = jQuery(button.currentTarget);
			this.$projectsCategories
				.removeClass("projects__button--active")
				.removeAttr("disabled");
			currentCategory
				.addClass("projects__button--active")
				.attr("disabled", "true");
			this.currentCategory = currentCategory.data("category");
			this.getProjects();
			this.$projectsCategoriesContainer.removeClass("show");
		});
	}

	getProjects(): void {
		const baseUrl = this.$projectsContainer.data("base-url");

		const request = jQuery.ajax({
			url: `${baseUrl}/wp-json/wp/v2/posts?per_page=12&page=${this.currentPage}${this.currentCategory ? `&categories=${this.currentCategory}` : ""}`,
			method: "get",
			dataType: "json",
		});

		// @ts-ignore
		request?.success((projects: IProject[]) => {
			let htmlProjects = "";
			if (this.currentPage === 1) this.emptyProjectsList();

			let countPost = 0;
			for (const project of projects) {
				if (countPost % 2 === 0)
					htmlProjects += '<div class="projects__container">';
				htmlProjects += this.template(project);
				if (countPost % 2 === 1) htmlProjects += "</div>";
				countPost++;
			}

			if (countPost % 2 !== 0) htmlProjects += "</div>";

			this.$projectsContainer.append(htmlProjects);

			if (
				this.currentPage.toString() ===
				request.getResponseHeader("X-WP-TotalPages")
			) {
				this.$projectsLoaderMore.data("page", 1);
				this.currentPage = 1;
				return this.controllerLoaderMore("hide");
			}

			// @ts-ignore
			if (
				this.currentPage.toString() <
				request?.getResponseHeader("X-WP-TotalPages")
			) {
				this.$projectsLoaderMore.data("page", this.currentPage + 1);
				return this.controllerLoaderMore("show");
			}
		});
	}

	emptyProjectsList() {
		this.$projectsContainer.empty();
	}

	controllerLoaderMore(visibility: "show" | "hide") {
		if (visibility === "hide")
			return this.$projectsLoaderMore.addClass("hidden");
		this.$projectsLoaderMore.removeClass("hidden");
	}

	template(project: IProject) {
		return `<div><a class="project__link" href="${project.link}" style="background-image: url('${project.about.thumbnail}')">
             <div class="project__info">
                <div class="project__category">${project.about.category}
                <p class="project__title">${project.title.rendered}</p></div>
             </div></a></div>`;
	}
}
