import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormsModule, ValidatorFn, AbstractControl} from '@angular/forms';
import { SavedataService } from '../savedata.service';
import { Router,ActivatedRoute,Params } from '@angular/router';
import {AuthService} from '../auth.service';




export class Data{
  id:number;
  name:string;
  email:string;
}

export class Role{
    active:boolean;
    id:number;
    role:string;
}
export class UserModel{
    first_name:string;
    last_name:string;
    email:string;
    roles_id:number;

}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],


})

export class UsersComponent implements OnInit {
    UserForm:FormGroup;
    data:Data[];
    roles:Role[];
    UserModel :UserModel;
    hasErrors:any;
    editData:any;
    userId:number;
    buttonName:string;
  constructor(private SavedataService:SavedataService,private route:Router,private activatedRoute:ActivatedRoute,private authService:AuthService) {
      this.userId=0;
      this.UserModel=new UserModel;
      this.authService.checkUserLogin();
      //this.UserModel.first_name='first_name';
      console.log(this.UserModel);
      this.SavedataService.getRoleById(0).subscribe(value=>{
        this.roles=value.data;
        this.hasErrors='';
        this.buttonName='Create';
    });
    this.activatedRoute.params.subscribe(
        (params:Params)=>{
            this.userId=params['id'];
            if(this.userId>0){
                this.SavedataService.getUserDetails(this.userId).subscribe(
                    res=>{
                        this.editData=res.data;
                        console.log(this.editData);
                        this.UserModel=this.editData;
                        this.buttonName='Update';
                    }
                );
            }
        });

  }

  ngOnInit() {

      if(!this.userId){ //Insert validation
          this.UserForm=new FormGroup({
              first_name: new FormControl('',[Validators.required]),
              last_name:  new FormControl('',[Validators.required]),
              email:     new FormControl('',[Validators.required,Validators.email]),
              roles_id:      new FormControl('',[Validators.required]),
              password: new FormControl('', [Validators.required, Validators.minLength(8)])
          });
      }else{ //Edit Validation
          this.UserForm=new FormGroup({
              first_name: new FormControl('',[Validators.required]),
              last_name:  new FormControl('',[Validators.required]),
              email:     new FormControl('',[Validators.required,Validators.email]),
              roles_id:      new FormControl('',[Validators.required]),
              password: new FormControl({value:'',disabled:true}, [Validators.required, Validators.minLength(8)])
          });
      }


     }

    onSubmit(data){

        if(this.userId>0) {
            this.SavedataService.updateUser(data, this.userId).subscribe(
                res => {
                    console.log(res.json());
                    this.route.navigate(['users/list']);
                },
                err => {
                    console.log(err.json());
                    err = err.json();
                    this.hasErrors = err.data+' '+err.message;
                }
            );
        }else {

            this.SavedataService.saveData(data).subscribe(
                res => {
                    res = res.json();
                    console.log(res);
                    this.route.navigate(['/users/list']);
                },
                err => {
                    err = err.json();
                    this.hasErrors = err.data;
                    console.log(this.hasErrors);
                }
            );
        }

    }

    imageUploaded(event:any){
        console.log(event);
    }



}
