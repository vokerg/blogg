import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorComponent } from './author/author.component';
import { AuthorService } from '../author.service';

@NgModule({
  declarations: [
    AuthorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthorModule { }
