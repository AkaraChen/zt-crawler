import { appendFileSync } from "fs";
import { Post } from "../model/post";
import { Blog } from "../model/blog";

function add(post: Post) {
  let text = `${post.title} ;; ${post.url} ;; ${post.category} ;; ${post.image}\n`;
  appendFileSync("output/index.txt", text, "utf-8");
}

function invalid(blog: Blog) {
  let text = `${blog.name} ;; ${blog.link}\n`;
  appendFileSync("output/invalid.txt", text, "utf-8");
}

export { add, invalid };
