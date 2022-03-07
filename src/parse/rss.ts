import parse from "rss-to-json";
import { Blog } from "../model/blog";
import { Post } from "../model/post";
import { config } from "../config";
import { add, invalid } from "../util/file";
import { getImage } from "../util/other";

function get(blog: Blog) {
  let index = 0;
  let feed = null;
  (async () => {
    try {
      feed = await parse(blog.link, {});
      let link: string;
      let category: string;
      feed.items.forEach((item) => {
        if (index >= config.perUser) return;
        if (item.link instanceof Array) {
          link = item.link[0].href;
        } else {
          link = item.link;
        }
        if (item.category.length == 0) {
          category = "无分类";
        } else {
          if (item.category instanceof Array) {
            category =
              item.category[0] instanceof Object
                ? item.category[0].term
                : item.category[0];
          } else {
            category = item.category;
          }
        }
        add(
          new Post(
            item.title,
            link,
            category,
            !item.thumbnail ? getImage(item.content) : item.thumbnail
          )
        );
        index++;
      });
    } catch (error) {
      invalid(blog);
      return;
    }
  })();
}

export { get as rssget };
