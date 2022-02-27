import axios from "axios";
import { Blog } from "../model/blog";
import { config } from "../config";
import { Post } from "../model/post";

function get(blog: Blog): void {
  let url = blog.link;
  if (url.endsWith("/")) {
    url = url.slice(0, url.length - 1);
  }
  let list = [];
  (async () => {
    axios.get(`${url}/wp-json/wp/v2/posts`).then((response) => {
      let index = 0;
      response.data.forEach((item: any) => {
        if (index >= config.perUser) return;
        list.push(new Post(item.title.rendered, item.link));
        index++;
      });
      return list;
    });
  })();
}

export { get as wpget };
