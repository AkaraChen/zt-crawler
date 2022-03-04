interface Blog {
  name: string;
  link: string;
  description: string;
  mode: blogMode;
}

type blogMode = "rss" | "wp";

export { Blog };
