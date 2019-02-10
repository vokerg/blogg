import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments/comments.component';
import { RouterModule } from '@angular/router';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommentsComponent
  ]
})
export class SharedModule { }
