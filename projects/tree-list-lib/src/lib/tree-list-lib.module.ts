import { NgModule } from '@angular/core';
import { TreeListLibComponent } from './tree-list-lib.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [TreeListLibComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  exports: [TreeListLibComponent]
})
export class TreeListLibModule { }
