import { TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TvmazeComponent }      from './tvmaze/tvmaze.component';
import { TvmazeSearchComponent }  from './tvmaze-search/tvmaze-search.component';
import { AppRoutingModule } from './/app-routing.module';
import {APP_BASE_HREF} from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TvmazeComponent,
        TvmazeSearchComponent
      ],
      imports: [
        AppRoutingModule,
        HttpClientModule
      ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should render the logo', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.logo>img').src).toContain('assets/images/vidispine-logo-arvato.svg');
  }));
});
