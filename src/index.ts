import { blogMeta } from "./blog";
import { route } from "./route";

blogMeta().forEach((item) => {
  route(item);
});
