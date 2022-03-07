import { config } from "../config";
import { list } from "./cover";

function removeSlash(link: string) {
  if (link.endsWith("/")) return link.slice(0, link.length - 1);
  return link;
}

function getImage(content: string): string {
  try {
    let imgReg = /<img.*?(?:>|\/>)/gi;
    let srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
    let arr = content.match(imgReg);
    if (!arr) {
      return list[Math.floor(Math.random() * list.length)];
    }
    let src = arr[0].match(srcReg);
    return src[0].slice(5, src[0].length - 1);
  } catch (error) {
    return list[Math.floor(Math.random() * list.length)];
  }
}

export { removeSlash, getImage };
