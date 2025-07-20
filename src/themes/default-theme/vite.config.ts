import { defineConfig } from "vite";
// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
	root: "assets",
	plugins: [
		tailwindcss(),
		viteStaticCopy({
			targets: [
				{
					src: path.resolve(__dirname, "./assets/fonts"),
					dest: "",
				},
				{
					src: path.resolve(__dirname, "./assets/images"),
					dest: "",
				},
			],
		}),
	],
	resolve: {
		alias: {
			jquery: "jquery",
			slick: "slick",
			"@images": path.resolve(__dirname, "./assets/images"),
			"@ts": path.resolve(__dirname, "./assets/ts"),
			"@components": path.resolve(__dirname, "./assets/ts/components"),
			"@style": path.resolve(__dirname, "./assets/css"),
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
				assetFileNames: (_assetInfo) => {
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
