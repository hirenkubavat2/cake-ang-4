import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import {Observable} from "rxjs";
import {Http} from '@angular/http';
import {SavedataService} from '../savedata.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  RolesForm:FormGroup;
  res:any;
  hasErrors:any;
  constructor(private savedataService:SavedataService,private router:Router) {
      this.hasErrors='';
    this.RolesForm=new FormGroup({
      name:new FormControl('',[Validators.required])
    })
  }

  onSubmit(data){
   this.savedataService.saveRole(data).subscribe(
       value=>{
            if(value.status==200){
             this.router.navigateByUrl('/roles/list');
            }
        },
       err=>{
           console.log(err.json());
           this.hasErrors=err.json().message;
       }
    );
  }
  ngOnInit() {
  }

}
