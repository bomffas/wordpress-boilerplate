import { defineConfig } from "vite";
// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
import path from "path";

export default defineConfig({
	root: "assets",
	resolve: {
		alias: {
			jquery: "jquery",
			slick: "slick",
			"@images": path.resolve(__dirname, "./assets/images"),
		},
	},
	build: {
		assetsInlineLimit: 0,
		rollupOptions: {
			input: {
				main: "./assets/ts/main.ts",
				styles: "./assets/css/main.css",
				login: "./assets/css/wordpress/login.css",
			},
			output: {
				entryFileNames: "[name].js",
				chunkFileNames: "[name].js",
				assetFileNames: (assetInfo) => {
					return "[name].[ext]";
				},
			},
		},
		outDir: "../dist",
	},
	server: {
		watch: {
			ignored: ["**/node_modules/**"],
		},
	},
});
