import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';
import { Article } from './model/article';
import { Comment } from './model/comment';

@Injectable()
export class ArticlesService {

  constructor(private http: HttpClient) {
   }

  getArticles() {
    return this.http.get<any>('api/articles').map(response => <Article[]>response.articles);
  }

  getComments(articleId:number) {
    return this.http.get<any>('api/articles/' + articleId + '/comments' ).map(response => <Comment[]>response.comments);
  }

}
