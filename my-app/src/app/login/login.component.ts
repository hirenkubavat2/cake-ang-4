import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import { Http } from '@angular/http';
import { SavedataService } from '../savedata.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  UserForm:FormGroup;
  userLoginResponse:any;
  constructor(private SavedataService:SavedataService,private Router:Router) {

  }

  ngOnInit() {
     this.UserForm=new FormGroup({
      email : new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',[Validators.required,Validators.minLength(8)])

    });
  }

  userLogin(data){

  this.SavedataService.login(data).subscribe(
      res=>{
        data=res.json();
        localStorage.setItem('currentUser',JSON.stringify({
          token:data.token,
          data:data
        }));
        if(data.token!=''){
          location.reload();
          this.Router.navigate(['dashboard']);

        }else{
          this.Router.navigateByUrl('/login');
        }
      },
      err=>this.logError(err)
    );

  }

  logError(err:any){
    err=err.json();
    console.log(err);
    this.UserForm.controls['email'].setErrors(null);

  }

}
