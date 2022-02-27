class Post {
  constructor(
    titel: string,
    url: string,
    category: Array<string>,
    tag: Array<string>,
    image: string
  ) {
    this.title = titel;
    this.url = url;
    this.category = category;
    this.tag = tag;
    this.image = image;
  }
  title: string;
  url: string;
  category: Array<string>;
  tag: Array<string>;
  image: string;
}

export { Post };
