import { Injectable } from '@angular/core';
import { Author } from './model/author';

@Injectable()
export class AuthorService {

  constructor() { }

  getAuthor(authorId: number):Author {
    return new Author();
  }
}
