import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  id;

  ngOnInit() {
    this.route.params.forEach(params => this.id = params["id"]);
  }

  back() {
    this.router.navigate(['/']);
  }

}
