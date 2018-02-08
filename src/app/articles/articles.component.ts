import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles1: Observable.of([
    {
      title: "article1",
      subject: "subject1",
      content: "articlet article article"
    },
    {
      title: "article2",
      subject: "subject2",
      content: "articlet article article"
    }
  ]);

  constructor() { }

  ngOnInit() {
  }

}
