import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "lib/Jexl.js",
  output: {
    file: "vendor/mozjexl.sys.mjs",
    format: "esm",
  },
  plugins: [commonjs()],
};
