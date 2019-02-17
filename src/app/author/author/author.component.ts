import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../service/author.service';
import { Author } from '../../model/author';
import { Comment } from '../../model/comment'

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  author: Author;
  comments: Comment[];

  constructor( private authorService: AuthorService ) { }

  ngOnInit() {
    this.author = this.authorService.getAuthor(0);
    this.comments = this.authorService.getAuthorComments(0);
  }

}
