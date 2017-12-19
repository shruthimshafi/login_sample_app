import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Area1Component } from './area-1/area-1.component';
import { Area2Component } from './area-2/area-2.component';


@NgModule({
  declarations: [
    AppComponent,
    Area1Component,
    Area2Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, 
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
