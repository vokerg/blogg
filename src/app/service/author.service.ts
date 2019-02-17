import { Injectable } from '@angular/core';
import { Author } from '../model/author';
import { Comment } from '../model/comment';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor() { }

  getAuthor(authorId: number):Author {
    return new Author();
  }

  getAuthorComments(authorId: number):Comment[] {
    let comment: Comment = new Comment();
    console.log("comment", comment);
    comment.author = "aaass";
    comment.comment="blablabla";

    let comment1 = <Comment>({
      author:"aaadfsdfsdf",
      comment:"aaaaa"
    });

    return [comment, comment1];
  }
}
