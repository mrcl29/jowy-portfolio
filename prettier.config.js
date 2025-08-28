// prettier.config.js
export default {
  semi: true,
  singleQuote: false,
  trailingComma: "es5",
  plugins: [
    "prettier-plugin-astro", // Para formatear archivos .astro
    "prettier-plugin-tailwindcss", // Para ordenar clases Tailwind
  ],
  tailwindStylesheet: "./src/styles/global.css", // <-- archivo CSS principal
};
