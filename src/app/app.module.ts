import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles/articles.component';
import { ArticleComponent } from './article/article/article.component';
import { ArticlesService } from './articles.service';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { ArticlesModule } from './articles/articles.module';
import { ArticleModule } from './article/article.module';

@NgModule({
  declarations: [
    AppComponent,
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
    ]),
    ArticlesModule,
    ArticleModule
  ],
  providers: [
    ArticlesService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
