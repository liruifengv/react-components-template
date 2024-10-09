import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const name = "index";

export default defineConfig(() => {
	return {
		build: {
			lib: {
				entry: "src/index.ts",
				name: name,
				fileName: (format) => (format === "es" ? `${name}.mjs` : `${name}.js`),
			},
		},
		plugins: [
			dts({
				outDir: "dist/types",
			}),
		],
	};
});