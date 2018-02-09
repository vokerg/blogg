import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: [ ];

  constructor() {
    this.articles = [
      {
        id: "1",
        title: "article1",
        subject: "subject1",
        content: "articlet article article",
        liked: false
      },
      {
        id: "2",
        title: "article2",
        subject: "subject2",
        content: "articlet article article",
        liked: false
      }
    ];
   }

  ngOnInit() {

  }

  setLike(article) {
    console.log("articles setLike fired for id" + article.id, this.articles);
    article.liked = !article.liked;

  }

}
