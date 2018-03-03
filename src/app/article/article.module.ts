import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ArticleComponent } from './article/article.component';
import { CommentComponent } from './comment/comment.component';
import { EditCommentComponent } from './edit-comment/edit-comment.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    ArticleComponent,
    CommentComponent,
    EditCommentComponent
  ]
})
export class ArticleModule { }
