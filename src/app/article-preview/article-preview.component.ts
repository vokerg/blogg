import { Component, OnInit, Input } from '@angular/core';
import { ArticlesComponent } from '../articles/articles.component';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.css']
})
export class ArticlePreviewComponent implements OnInit {

  @Input() article;

  setLike() {
    this.articlesComponent.setLike(this.article);
  }

  constructor(private articlesComponent: ArticlesComponent) { }

  ngOnInit() {
  }

}
