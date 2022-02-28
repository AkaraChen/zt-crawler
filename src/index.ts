import { readFileSync } from "fs";
import { blogMeta } from "./blog";
import { route } from "./route";

console.log(readFileSync("logo.txt", "utf-8"));

blogMeta().forEach((item) => {
  route(item);
});
