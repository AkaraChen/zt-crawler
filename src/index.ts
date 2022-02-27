import { blogMeta } from "./blog";
import { Blog } from "./model/blog";
import { route } from "./route";

const data = [];
blogMeta().forEach((item: Blog) => {
  try {
    data.push(route(item));
  } catch (error) {
    console.log(error);
    return;
  }
});
