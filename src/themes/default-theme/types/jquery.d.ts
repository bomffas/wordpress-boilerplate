import "jquery";
import "slick-carousel";

declare global {
	interface JQuery {
		// @ts-ignore
		slick(options?: slick.Options): JQuery;
	}
}
