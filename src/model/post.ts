class Post {
  constructor(
    titel: string,
    url: string,
    category: string,
    image: string
  ) {
    this.title = titel;
    this.url = url;
    this.category = category;
    this.image = image;
  }
  title: string;
  url: string;
  category: string;
  image: string;
}

export { Post };
