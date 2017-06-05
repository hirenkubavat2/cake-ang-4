import { Component, OnInit } from '@angular/core';
import {Router,Params,ActivatedRoute} from '@angular/router';
import {SavedataService} from '../savedata.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-roleupdate',
  templateUrl: './roleupdate.component.html',
  styleUrls: ['./roleupdate.component.css']
})
export class RoleupdateComponent implements OnInit {
  isEdit:boolean;
  roleData:any;
  roleId:number;
  RolesForm:FormGroup;
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private savedataService:SavedataService) {
    this.isEdit=false;
    this.activatedRoute.params.subscribe((params:Params)=>{
      this.roleId=params['id'];
    });
    this.RolesForm=new FormGroup({
      name:new FormControl('',[Validators.required])
    });
    if(this.roleId>0) {
      this.isEdit=true;
      this.savedataService.getRoleById(this.roleId).subscribe(data => {
        this.roleData = data.data;
        console.log(data);
      });

    }
  }

  ngOnInit() {
  }

  onSubmit(data){
    this.savedataService.updateRole(  this.roleId,data).subscribe(value=>{
      if(value.status==200){
        this.router.navigateByUrl('/roles/list');
      }
    });
  }


}
