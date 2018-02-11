import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ArticlesService } from '../articles.service';
import { Article } from '../model/article';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  id=0;
  title="";
  subject="";
  content="";


  article: Article = {
    id:0,
    title:"",
    subject:"",
    content:"",
    liked: false
  };

  onSubmit() {
    this.articlesService.updateArticle(this.article).forEach(errorCode => {
      if (errorCode !== 0) {
        console.log("result111", errorCode);
      }
    })
  }

  constructor(private router: Router, private route: ActivatedRoute, private articlesService: ArticlesService) { }

  ngOnInit() {
    this.route.params.forEach(params => this.id = params["id"]);
  }

}
