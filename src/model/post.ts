class Post {
  constructor(
    title: string,
    url: string,
    category: string,
    description: string
  ) {
    this.title = title;
    this.url = url;
    this.category = category;
    this.description = description;
  }
  title: string;
  url: string;
  category: string;
  description: string;
}

export { Post };
