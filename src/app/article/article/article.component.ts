import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { ArticlesService } from '../../articles.service';
import { Article } from '../../model/article';
import { Comment } from '../../model/comment';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articlesService: ArticlesService
  ) {
    this.article = new Article();
  }

  id: number;
  article: Article;
  comments: Comment[];

  ngOnInit() {
    this.route.params.forEach(params => {
      this.id = params["id"];
      this.articlesService.getArticle(this.id).forEach(article => {
        this.article = article;
        this.articlesService.getComments(this.id).forEach(response => this.comments = response);
      });
    });
  }

  back() {
    this.router.navigate(['/']);
  }

}
