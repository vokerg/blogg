import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { CommentComponent } from './comment/comment.component';
import { ArticlePreviewComponent } from './article-preview/article-preview.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticlesService } from './articles.service';
import { EditArticleComponent } from './edit-article/edit-article.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    CommentComponent,
    ArticlePreviewComponent,
    ArticlesComponent,
    EditArticleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: ArticlesComponent},
      {path: 'articles/:id', component: ArticleComponent},
      {path: 'articles/:id/edit', component: EditArticleComponent}
    ])
  ],
  providers: [
    ArticlesService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
