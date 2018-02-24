export class Article {
  id: number;
  title: string;
  subject: string;
  content: string;
  liked: boolean;
  constructor() {
    this.id = 0;
    this.title = "";
    this.subject = "";
    this.content = "";
    this.liked = false;
  }
}
