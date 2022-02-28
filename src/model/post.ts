class Post {
  constructor(
    titel: string,
    url: string,
    category: Array<string>,
    image: string
  ) {
    this.title = titel;
    this.url = url;
    this.category = category;
    this.image = image;
  }
  title: string;
  url: string;
  category: Array<string>;
  image: string;
}

export { Post };
