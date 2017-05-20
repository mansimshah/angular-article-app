import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ArticleService {

    // URL of our API
    private url: string = "http://localhost:3000/articles";

    constructor (private http: Http) {}

    // Get articles in the API
    getArticles(){
        return this.http.get(this.url)
            .map(res => res.json ());
    }

    // Get a article in the API
    getArticle(id) {
        return this.http.get(this.url + '/' + id)
            .map(res => res.json ());
    }

    // Add a article in the API
    addArticle(article){
        return this.http.post(this.url,{'article': article})
            .map(res => res.json());
    }

    // Update a article in the API
    updateArticle(article){
        return this.http.put (this.url + '/' + article.id, {'article': article})
            .map (res => res.json ());
    }

    // Delete a article on the server
    deleteArticle(id) {
        return this.http.delete(this.url + '/' + id)
            .map(res => res.json ());
    }

}