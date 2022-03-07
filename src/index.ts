import { blogMeta } from "./blog";
import { route } from "./route";
import { init } from "./util/file";

init();

blogMeta().forEach((item) => {
  route(item);
});
