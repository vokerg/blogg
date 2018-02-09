import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class ArticlesService {

  constructor(private http: HttpClient) {
    this.mockArticles = [
      {
        "id": "1",
        "title": "article1",
        "subject": "subject1",
        "content": "articlet article article",
        "liked": false
      },
      {
        "id": "2",
        "title": "article2",
        "subject": "subject2",
        "content": "articlet article article",
        "liked": false
      }
    ];
   }

  getServices() {
    console.log(this.http.get('assets/articles.json'));
    return Observable.from(this.mockArticles);
    //return this.http.get('assets/articles.json').map(response => {
    //  console.log("observ fired");
    //  return response;
    //});

  }

}
