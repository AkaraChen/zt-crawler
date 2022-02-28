import axios from "axios";
import { Blog } from "../model/blog";
import { config } from "../config";
import { Post } from "../model/post";
import { add, invalid } from "../util/file";
import { getImage, removeSlash } from "../util/other";

function getCategoryName(blog: Blog, category: number) {
  let url = removeSlash(blog.link);
  let result = "无分类";
  async () => {
    axios
      .get(`${url}/wp-json/wp/v2/categories/${category}`)
      .then((response) => {
        result = response.data.name;
      });
  };
  return result;
}

function get(blog: Blog) {
  let url = removeSlash(blog.link);
  (async () => {
    axios
      .get(`${url}/wp-json/wp/v2/posts`)
      .then((response) => {
        let index = 0;
        try {
          response.data.forEach((item: any) => {
            if (index >= config.perUser) return;
            let category = getCategoryName(blog, item.categories[0]);
            add(
              new Post(
                item.title.rendered,
                item.link,
                category,
                getImage(item.content.rendered)
              )
            );
            index++;
          });
        } catch (error) {
          invalid(blog);
        }
      })
      .catch(() => {
        invalid(blog);
      });
  })();
}

export { get as wpget };
