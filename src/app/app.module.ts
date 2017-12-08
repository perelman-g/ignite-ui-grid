

import { Component, NgModule } from '@angular/core';
import { IgHierarchicalGridComponent } from 'igniteui-angular2';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent, IgHierarchicalGridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
