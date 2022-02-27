import axios from "axios";
import { Blog } from "../model/blog";
import { config } from "../config";
import { Post } from "../model/post";
import { add, invalid } from "../util/file";

function get(blog: Blog) {
  let url = blog.link;
  if (url.endsWith("/")) {
    url = url.slice(0, url.length - 1);
  }
  (async () => {
    axios
      .get(`${url}/wp-json/wp/v2/posts`)
      .then((response) => {
        let index = 0;
        try {
          response.data.forEach((item: any) => {
            if (index >= config.perUser) return;
            add(new Post(item.title.rendered, item.link));
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
