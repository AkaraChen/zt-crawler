import { config } from "../config";
import { list } from "./cover";

function removeSlash(link: string) {
  if (link.endsWith("/")) return link.slice(0, link.length - 1);
  return link;
}

export { removeSlash };
