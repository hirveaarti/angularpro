import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Directive } from '../.directive';
import { Pipe } from '../.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Directive,
    Pipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
