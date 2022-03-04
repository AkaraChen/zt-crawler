class Post {
  constructor(
    title: string,
    url: string,
    category: string,
    image: string
  ) {
    this.title = title;
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
