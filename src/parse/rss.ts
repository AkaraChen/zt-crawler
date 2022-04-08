import parse from "rss-to-json";
import { Blog } from "../model/blog";
import { Post } from "../model/post";
import { config } from "../config";
import { add, invalid } from "../util/file";

function get(blog: Blog) {
  let index = 0;
  let feed = null;
  (async () => {
    try {
      feed = await parse(blog.link, {});
      let link: string;
      let category: string;
      let description: string
      feed.items.forEach((item) => {
        if (index >= config.perUser) return;
        link = item.link instanceof Array ? item.link[0].href : item.link
        category = item.category.length == 0 ? "无分类" :
          item.category instanceof Array ?
            item.category[0] instanceof Object ? item.category[0].term : item.category[0]
            : item.category;
        description = item.content.slice(30)
        add(new Post(item.title, link, category, description));
        index++;
      });
    } catch (error) {
      invalid(blog);
      return;
    }
  })();
}

export { get as rssget };
