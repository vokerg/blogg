import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../author.service';
import { Author } from '../../model/author';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  author: Author

  constructor( private authorService: AuthorService ) { }

  ngOnInit() {
    this.author = this.authorService.getAuthor(0);
  }

}
