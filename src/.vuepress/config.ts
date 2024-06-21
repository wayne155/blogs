import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Talk is cheap",
      description: "Wayne's blog",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Talk is cheap",
      description: "Wayne 的博客",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
