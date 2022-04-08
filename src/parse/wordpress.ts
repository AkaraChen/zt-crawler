import axios from "axios";
import { Blog } from "../model/blog";
import { config } from "../config";
import { Post } from "../model/post";
import { add, invalid } from "../util/file";
import { removeSlash } from "../util/other";
import request from "sync-request";

function getCategoryName(blog: Blog, category: number): string {
  let url = removeSlash(blog.link);
  let result: string;
  let res = request("GET", `${url}/wp-json/wp/v2/categories/${category}`);
  // @ts-ignore
  result = JSON.parse(res.body).name;
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
            let description = item.content.rendered;
            add(new Post(item.title.rendered, item.link, category, description));
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
