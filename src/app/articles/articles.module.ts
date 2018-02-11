import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ArticlesComponent } from './articles/articles.component';
import { ArticlePreviewComponent } from './article-preview/article-preview.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ArticlesComponent,
    ArticlePreviewComponent
  ]
})
export class ArticlesModule { }
