import {Component, OnInit, OnDestroy} from '@angular/core';
import { Router,Params,ActivatedRoute } from '@angular/router';
import { SavedataService } from '../savedata.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';

class SingleUserDetails{
  id:number;
  first_name:string;
  last_name:string;
  avatar:string;
}

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
  UserForm:FormGroup;
  singleUserDetail:SingleUserDetails;

  constructor(private activatedRoute:ActivatedRoute,private SavedataService:SavedataService) {
    this.UserForm=new FormGroup({
      first_name:new FormControl('',[Validators.required]),
      last_name:new FormControl('',[Validators.required]),
    });

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params:Params)=>{
      let userId=params['id'];
      this.SavedataService.getUserDetails(userId).subscribe(data=>{
       this.singleUserDetail=data.data;
       console.log(this.singleUserDetail);
       });
    });


  }

  onSubmit(data){
    console.log(data);
  }
}
