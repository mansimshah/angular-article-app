import { Component, OnInit } from '@angular/core';
// Import our service so we can talk to the API
import {ArticleService} from '../shared/article.service';
// Imports our Model
import {Article} from "../shared/article";
// Import the Router so we can get the id parameter
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})

export class ArticleFormComponent implements OnInit {
  
  // Create a string variable to tell if it is an issue or creation of Article
  title: string;
  // Get our Model and put in the variable article
  article: Article = new Article();

  constructor(private articleService: ArticleService,
              private router: Router,
              private route: ActivatedRoute){}

  ngOnInit(){
    var id = this.route.params.subscribe(params => {
      var id = params ['id'];

      this.title = id? 'Edit Article': 'Create Article';

      if (!id)
        return;

      this.articleService.getArticle(id)
        .subscribe (
          article => this.article = article,
          response => {});
      });
  }

  save(){
    var result;

    if (this.article.id) {
      result = this.articleService.updateArticle(this.article);
    } 
    else{
      result = this.articleService.addArticle(this.article);
    }
    result.subscribe (data => this.router.navigate(['/']));
  }

}