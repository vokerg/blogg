import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';
import { Article } from './model/article';

@Injectable()
export class ArticlesService {

  constructor(private http: HttpClient) {
   }

  getServices() {
    return this.http.get<any>('assets/articles.json').map(response => <Article[]>response.articles);
  }

}
