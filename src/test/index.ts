import axios from "axios";
import { Blog } from "../model/blog";
import { removeSlash } from "../util/other";

async function getCategoryName(blog: Blog, category: number): Promise<string> {
  let url = removeSlash(blog.link);
  let result: string;
  (async () => {
    await axios
      .get(`${url}/wp-json/wp/v2/categories/${category}`)
      .then((response) => {
        result = response.data.name;
      });
  })();
  return result;
}

const blog = new Blog();
blog.link = "https://www.vpsss.net/";
console.log(getCategoryName(blog, 1));
