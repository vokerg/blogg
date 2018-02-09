import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles[];

  constructor(private articlesService: ArticlesService) {
   }

  ngOnInit() {
    this.articlesService.getServices().forEach(article => {
      console.log("articles", article);
        //this.articles = articles;
        this.articles.push(article);
    });
  }

  setLike(article) {
    console.log("articles setLike fired for id" + article.id, this.articles);
    article.liked = !article.liked;

  }

}
