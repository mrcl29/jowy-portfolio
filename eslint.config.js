export default [
  {
    files: ["**/*.astro", "**/*.js", "**/*.ts"],
    plugins: ["astro"],
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
    },
  },
];
