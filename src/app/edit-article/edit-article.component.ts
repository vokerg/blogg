import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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

  onSubmit() {
    const {id, title, subject, content} = this;
    let article = <Article>({
        id,
        title,
        subject,
        content
    });
    console.log(article);
  }
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach(params => this.id = params["id"]);
  }

}
