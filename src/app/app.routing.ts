import {ModuleWithProviders} from '@angular/core';
// Imports the route module of Angular 2
import {Routes, RouterModule} from '@angular/router';

// Import your created components
import {ArticleComponent} from './article/article.component';
import {ArticleFormComponent} from './article/article-form/article-form.component';

// Create our routes
const appRoutes: Routes = [
{path: '', pathMatch: 'full', component: ArticleComponent},
{path: 'article/new', component: ArticleFormComponent},
{path: 'article/:id', component: ArticleFormComponent},
{path: 'article/:id/edit', component: ArticleFormComponent}
];

// Export the routing constant to import it into the app.module.ts file
export const routing: ModuleWithProviders = RouterModule.forRoot (appRoutes);