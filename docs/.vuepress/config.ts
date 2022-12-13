import { defineConfig } from "vuepress/config";
export default defineConfig({
  title: "Hello sword4869/vuepress-starter",
  base: "/vuepress-starter/",
  plugins: [
    "vuepress-plugin-helper-live2d",
    "vuepress-plugin-reading-progress",
    "vuepress-plugin-code-copy",
  ],
  themeConfig: {
    docsRepo: "sword4869/vuepress-starter",
    docsBranch: "main",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    sidebar: {
      "/": [
        ["/", "README"]
      ],
    },
  },
});
