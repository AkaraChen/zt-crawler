import Parser from "rss-parser";
import { Blog } from "../model/blog";
import { Post } from "../model/post";
import { config } from "../config";

function get(blog: Blog) {
  let parser = new Parser();
  let list = [];
  (async () => {
    const feed = await parser.parseURL(blog.link);
    let index = 0;
    feed.items.forEach((item) => {
      if (index >= config.perUser) return;
      list.push(new Post(item.title, item.link));
      index++;
    });
    return list;
  })();
}

export { get as rssget };
