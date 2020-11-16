import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './book';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
//import 'rxjs/add/observable/throw';
import { throwError } from 'rxjs';



@Injectable()
export class BookService{

    constructor(private _httpService : HttpClient ){}

         getAllBooks() : Observable<any>{
             return this._httpService.get("http://localhost:8080/bookapi/api/book");
         }  

    addBook(book: Book) {
        let body = JSON.stringify(book);
        const options = {
            headers: new HttpHeaders({  
                //'Content-Type': 'application/json'
                'Content-Type': 'text/html'
            })
          };

          if(book.id){
            return this._httpService.put("http://localhost:8080/bookapi/api/book/ "+book.id, body , options);
          }else{
               return this._httpService.post("http://localhost:8080/bookapi/api/book" , body, options);
          }

    }

    deleteBook(bookId : string){
        return this._httpService.delete("http://localhost:8080/bookapi/api/book/" +bookId);
    }

    getBookById(bookId : string) :Observable<any> {
          return this._httpService.get("http://localhost:8080/bookapi/api/book/ "+bookId);
    }
}