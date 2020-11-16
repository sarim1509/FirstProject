import { BrowserModule } from '@angular/platform-browser';
import { Injectable, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookService } from './book/book.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent, 
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})

export class AppModule {}
