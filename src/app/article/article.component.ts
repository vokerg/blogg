import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }

  id;

  ngOnInit() {
    this.route.params.forEach(params => this.id = params["id"]);
  }

}
