import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles = [];

  constructor(private articlesService: ArticlesService) {
   }

  ngOnInit() {
    this.articlesService.getServices().forEach(response => this.articles = response);
  }

  setLike(article) {
    article.liked = !article.liked;
  }

}
