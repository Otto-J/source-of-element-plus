const data = require("./data.json");
module.exports = {
  title: "分析 element-plus 源码",
  description: "人人都能看懂",
  base: "/source-of-element-plus",
  lang: "zh-CN",
  themeConfig: {
    repo: "Otto-J/source-of-element-plus",
    docsDir: "docs",
    sidebar: {
      "/": data,
    },
  },
};
