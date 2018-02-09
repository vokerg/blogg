import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpHandler } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { CommentComponent } from './comment/comment.component';
import { ArticlePreviewComponent } from './article-preview/article-preview.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticlesService } from './articles.service';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    CommentComponent,
    ArticlePreviewComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: ArticlesComponent},
      {path: 'articles/:id', component: ArticleComponent}
    ])
  ],
  providers: [
    ArticlesService,
    HttpClient,
    HttpHandler
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
