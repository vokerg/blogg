import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ArticleComponent,
    CommentComponent
  ]
})
export class ArticleModule { }
