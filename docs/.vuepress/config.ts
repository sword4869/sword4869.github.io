import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  title: "Hello",
  base: "/",
  theme: hopeTheme({
    repo: "sword4869/sword4869.github.io",
    docsDir: "docs",
    sidebar: {
      "/": [
        {
          text: "README",
          link: "/",
        }
      ],
    },
  }),
});