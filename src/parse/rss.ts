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
        if (item.categories === []) {
          item.categories = ["无分类"];
        }
        if (item.thumbnail === "") {
          item.thumbnail = config.cunstomImage;
        }
        add(
          new Post(
            item.title,
            item.link,
            !item.categories ? ["无分类"] : item.categories,
            !item.thumbnail ? config.cunstomImage : item.thumbnail
          )
        );
        index++;
      });
    } catch (error) {
      invalid(blog);
    }
  })();
}

export { get as rssget };
