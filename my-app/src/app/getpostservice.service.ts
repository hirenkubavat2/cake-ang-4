import { Injectable } from '@angular/core';
import { Http,Headers,Response,ResponseOptions } from '@angular/http';
import "rxjs";

@Injectable()
export class GetpostserviceService {

  constructor(private http:Http) { }
  getArticles() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts').map(data=>data.json());
  }

}
