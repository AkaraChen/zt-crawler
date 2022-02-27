import fs from "fs";
import { Blog } from "./model/blog";

function blogMeta(): Array<Blog> {
  return JSON.parse(fs.readFileSync("blog.json", "utf-8"));
}

export { blogMeta };
