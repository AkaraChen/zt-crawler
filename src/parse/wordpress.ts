import axios from "axios";
import { Blog } from "../model/blog";
import { config } from "../config";
import { Post } from "../model/post";
import { add, invalid } from "../util/file";
import { getImage, removeSlash } from "../util/other";

function getCategoryName(blog: Blog, category: number): string {
  let url = removeSlash(blog.link);
  const result: string = "默认分类";
  (async () => {
    axios
      .get(`${url}/wp-json/wp/v2/categories/${category}`)
      .then((response) => {
        return response.data.name;
      })
      .catch(() => {
        invalid(blog);
      });
  })();
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
            let categoryList: Array<string> = [];
            item.categories.forEach((category) => {
              categoryList.push(getCategoryName(blog, category));
            });
            add(
              new Post(
                item.title.rendered,
                item.link,
                categoryList,
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
