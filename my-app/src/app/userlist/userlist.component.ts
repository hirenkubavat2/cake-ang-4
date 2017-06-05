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
  singleUserDetail:any;
  constructor(private  SavedataService:SavedataService,private Router:Router) {
    SavedataService.getData().subscribe(data=>{
      this.userslist=data.data;
      console.log(this.userslist);

    });


  }
  ngOnInit() {
  }

  updateRecord(id:number){
    this.Router.navigate(['/user/',id]);
  }

}
