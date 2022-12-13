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
        ["/", "README"],
        ["/theme.md", "theme.md"],
        {
          title: "create",
          children: [
            ["/create/deploy\u811a\u672c.md", "deploy\u811a\u672c.md"],
            ["/create/github action.md", "github action.md"],
            [
              "/create/\u56fe\u7247\u683c\u5f0f.md",
              "\u56fe\u7247\u683c\u5f0f.md",
            ],
            ["/create/\u7a7a\u9879\u76ee.md", "\u7a7a\u9879\u76ee.md"],
            { title: "fake", children: [["/create/fake/test.md", "test.md"]] },
          ],
        },
      ],
    },
  },
});
