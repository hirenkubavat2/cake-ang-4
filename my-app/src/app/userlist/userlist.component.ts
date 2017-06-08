import { Component, OnInit } from '@angular/core';
import { SavedataService } from '../savedata.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  userslist:any;
  hasErrors:any;
  pagination:any;
  pageNumber:number;
  constructor(private  SavedataService:SavedataService,private Router:Router) {
    this.hasErrors='';
    this.getUserslist();
  }

  getRecordByPagination(pageNumber:number){
    if(pageNumber>0){
      this.pageNumber=pageNumber;
      this.getUserslist();
    }
  }
  getUserslist(){
    this.SavedataService.getData(this.pageNumber).subscribe(
        data=>{
          this.userslist=data.data;
          this.pagination=data.paging;
          console.log(this.userslist,this.pagination);
        },
        err=>{
          console.log(err.data);
        }
    );
  }
  ngOnInit() {

  }

  updateRecord(id:number){
    this.Router.navigate(['/user/',id]);
  }

  createRange(number){

    var items: number[] = [];
    for(var i = 1; i <= number; i++){
      items.push(i);
    }
    return items;
  }



  deleteRecord(item){

    if(confirm('Do you want to delete ?')){
      let id=this.userslist.indexOf(item);
      this.SavedataService.deleteUser(item.id).subscribe(
          res => {
            console.log(res.json());
            this.userslist.splice(id,1);
            console.log(this.userslist);
          },
          err => {
            console.log(err.json());
            err = err.json();
            this.hasErrors = err.data+' '+err.message;
          }
      );
    }

  }

}
