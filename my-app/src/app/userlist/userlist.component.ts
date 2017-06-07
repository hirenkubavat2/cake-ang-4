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
  db:any;

  constructor(private  SavedataService:SavedataService,private Router:Router) {
    this.hasErrors='';
    SavedataService.getData().subscribe(
    data=>{
      this.userslist=data.data;
      console.log(this.userslist);

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
