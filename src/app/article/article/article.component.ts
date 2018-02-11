import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { ArticlesService } from '../../articles.service';

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
  ) { }

  id=0;
  comments=[];

  ngOnInit() {
    this.route.params.forEach(params => {
      this.id = params["id"];
      this.articlesService.getComments(this.id).forEach(response => this.comments = response);
    });
  }

  back() {
    this.router.navigate(['/']);
  }

}
