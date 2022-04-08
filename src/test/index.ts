import { writeFileSync } from "fs";
import parse from "rss-to-json";

(async () => {
  let json = await parse("https://blog.akr.moe/atom.xml", {})
  writeFileSync("./test.json", JSON.stringify(json))
})()