import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default [
	{
		input: [`src/index.tsx`],
		plugins: [
			resolve(),
			babel({
				babelHelpers: "bundled",
				presets: ["@babel/preset-react"],
				extensions: [".js", ".jsx"],
				exclude: "node_modules/**",
			}),
			typescript({ tsconfig: "./tsconfig.json" }),
			peerDepsExternal({
				includeDependencies: true,
			}),
		],
		output: [
			{
				dir: `dist`,
				format: "esm",
				sourcemap: true,
			},
		],
	},
	{
		input: "dist/types/index.d.ts",
		output: [{ file: "dist/index.d.ts", format: "esm" }],
		plugins: [dts.default()],
	},
];
