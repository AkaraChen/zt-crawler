import { Blog } from "./model/blog";
import { rssget } from "./parse/rss";
import { wpget } from "./parse/wordpress";

let route = (item: Blog) => {
  switch (item.mode) {
    case "rss":
      return rssget(item);
    case "wp":
      return wpget(item);
    default:
      return;
  }
};

export { route };
