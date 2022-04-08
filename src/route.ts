import { Blog } from "./model/blog";
import { rssget } from "./parse/rss";
import { wpget } from "./parse/wordpress";
import { invalid } from "./util/file";

let route = (item: Blog) => {
  let config = {
    "wp": wpget,
    "rss": rssget
  }
  return config[item.mode] ? config[item.mode](item) : invalid(item)
};

export { route };
