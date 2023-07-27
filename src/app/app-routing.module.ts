import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { CreateBookComponent } from './create-book/create-book.component';

const routes: Routes = [
  { path: 'list', component: BookListComponent },
  { path: 'search', component: BookSearchComponent },
  { path: 'create', component: CreateBookComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
