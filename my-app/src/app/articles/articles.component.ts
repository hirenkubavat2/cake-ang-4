import { Component, OnInit } from '@angular/core';
import { GetpostserviceService } from '../getpostservice.service';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles:any;
  classArray:any;

  constructor(private GetpostserviceService:GetpostserviceService) {

    //return this.articles= this.http.get('https://jsonplaceholder.typicode.com/posts').map(this.extractData);

    GetpostserviceService.getArticles().subscribe(data=>{
      this.articles=data;
    });
    this.classArray=['success','warning','info','danger'];
  }

  ngOnInit() {
  }



}
