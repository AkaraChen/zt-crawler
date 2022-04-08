import { appendFileSync, unlinkSync, readFileSync, existsSync } from "fs";
import { Post } from "../model/post";
import { Blog } from "../model/blog";

function add(post: Post) {
  let text = `${post.title} ;; ${post.url} ;; ${post.category} ;; ${post.description}\n`;
  appendFileSync("output/index.txt", text, "utf-8");
}

function invalid(blog: Blog) {
  let text = `${blog.name} ;; ${blog.link}\n`;
  appendFileSync("output/invalid.txt", text, "utf-8");
  console.log(blog.name)
}

function init() {
  if (existsSync("output/index.txt")) unlinkSync("output/index.txt");
  if (existsSync("output/invalid.txt")) unlinkSync("output/invalid.txt");
  console.log(readFileSync("logo.txt", "utf-8"));
}

export { add, invalid, init };
