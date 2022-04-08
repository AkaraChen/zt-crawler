class Post {
  constructor(
    title: string,
    url: string,
    category: string,
  ) {
    this.title = title;
    this.url = url;
    this.category = category;
  }
  title: string;
  url: string;
  category: string;
}

export { Post };
