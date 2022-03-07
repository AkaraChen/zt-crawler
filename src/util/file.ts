import { appendFileSync, unlinkSync, readFileSync } from "fs";
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

function init() {
  unlinkSync("output/index.txt");
  unlinkSync("output/invalid.txt");
  console.log(readFileSync("logo.txt", "utf-8"));
}

export { add, invalid, init };
