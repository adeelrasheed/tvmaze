import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TvmazeComponent }      from './tvmaze/tvmaze.component';
import { TvmazeSearchComponent }  from './tvmaze-search/tvmaze-search.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: TvmazeSearchComponent },
  { path: 'detail/:id', component: TvmazeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}