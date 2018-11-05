import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TvmazeComponent }      from './tvmaze/tvmaze.component';
import { TvmazeSearchComponent }  from './tvmaze-search/tvmaze-search.component';

import { Tvmaze } from './services/tvmaze';
import { TvmazeService } from './services/tvmaze.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TvmazeComponent,
    TvmazeSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [Tvmaze, TvmazeService],
  bootstrap: [AppComponent]
})
export class AppModule { }