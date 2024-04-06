import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "文档",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "节点相关",
        icon: "lightbulb",
        prefix: "cluster/info/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "账号相关",
        icon: "lightbulb",
        prefix: "auth/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },
]);
