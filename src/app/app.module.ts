import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticleFormComponent } from './article/article-form/article-form.component';
import { ArticleService } from './article/shared/article.service';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticleFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
