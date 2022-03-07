import { readFileSync } from "fs";
import { Pool } from "pg";
import { Post } from "../model/post";

let posts: Array<Post> = [];
const file = readFileSync("output/index.txt", "utf-8");
const rows = file.split("\n");
rows.forEach((row) => {
  let meta = row.split(" ;; ");
  if (meta[0] == "") return;
  posts.push(new Post(meta[0], meta[1], meta[2], meta[3]));
});

const createPool = async () => {
  const pool = new Pool({ ssl: true });
  return pool;
};

const app = async () => {
  const pool = await createPool();
  if (!posts) return;
  posts.forEach((post) => {
    try {
      pool.query(
        `INSERT INTO zhutian.web_content (name, link, category, cover) 
    VALUES ('${post.title}'::varchar, '${post.url}'::varchar, '${post.category}'::varchar, '${post.image}'::varchar)`
      );
    } catch {
      console.log(post.url);
    }
  });
};

app();
