import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ArticlesComponent } from './articles/articles.component';
import { ArticlePreviewComponent } from './article-preview/article-preview.component';

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [
    ArticlesComponent,
    ArticlePreviewComponent
  ]
})
export class ArticlesModule { }
