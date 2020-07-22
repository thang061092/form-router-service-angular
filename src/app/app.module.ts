import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {ListComponent} from './users/list/list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddComponent } from './users/add/add.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListComponent,
    AddComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
