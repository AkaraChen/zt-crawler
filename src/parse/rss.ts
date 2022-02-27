import Parser from "rss-parser";
import { Blog } from "../model/blog";
import { Post } from "../model/post";
import { config } from "../config";
import { add, invalid } from "../util/file";

function get(blog: Blog) {
  let parser = new Parser();
  let index = 0;
  let feed = null;
  (async () => {
    try {
      feed = await parser.parseURL(blog.link);
      feed.items.forEach((item) => {
        if (index >= config.perUser) return;
        add(new Post(item.title, item.link));
        index++;
      });
    } catch (error) {
      invalid(blog);
    }
  })();
}

export { get as rssget };
