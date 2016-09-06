import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { Page1Component } from './page1.component';
import { Page2Component } from './page2.component';

@NgModule({
  imports: [ BrowserModule, routing ],
  declarations: [ AppComponent, Page1Component, Page2Component ],
  bootstrap: [ AppComponent ],
  providers: [ { provide: LocationStrategy, useClass: HashLocationStrategy } ]
})
export class AppModule { }