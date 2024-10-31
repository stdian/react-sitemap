import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default [
	{
		input: [`src/index.tsx`],
		plugins: [
			peerDepsExternal({
				includeDependencies: true,
			}),
			resolve(),
			commonjs(),
			babel({
				babelHelpers: "bundled",
				presets: ["@babel/preset-react"],
				extensions: [".js", ".jsx", ".ts", ".tsx"],
				exclude: "node_modules/**",
			}),
			typescript({ tsconfig: "./tsconfig.json" }),
		],
		output: [
			{
				dir: `dist`,
				format: "esm",
				sourcemap: true,
				entryFileNames: "[name].esm.js",
			},
			{
				dir: `dist`,
				format: "cjs",
				sourcemap: true,
				entryFileNames: "[name].cjs.js",
			},
		],
	},
	{
		input: "dist/types/index.d.ts",
		output: [{ file: "dist/index.d.ts", format: "esm" }],
		plugins: [dts.default()],
	},
];
