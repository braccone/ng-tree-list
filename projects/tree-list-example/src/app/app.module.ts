import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TreeListLibModule } from 'projects/tree-list-lib/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TreeListLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
