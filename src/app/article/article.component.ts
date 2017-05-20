import { Component, OnInit } from '@angular/core';
import { ArticleService } from './shared/article.service';
import { Article } from './shared/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {
  // Create a string variable to tell if it is an issue or creation of Question
  title: string;
  // Get our Model and put in the variable article
  articles = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getArticles()
      .subscribe((data) => this.articles = data);
  }

  deleteArticle (article) {
    if (confirm ("Are you sure you want to delete the articles " + article + "?")) {
      var index = this.articles.indexOf(article);
      this.articles.splice(index,1);

      this.articleService.deleteArticle(article.id)
        .subscribe (null);
    }
  }

}