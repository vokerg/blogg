import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class ArticlesService {

  constructor(private http: HttpClient) {
   }

  getServices() {
    return this.http.get<any>('assets/articles.json').map(response => response.articles);
  }

}
