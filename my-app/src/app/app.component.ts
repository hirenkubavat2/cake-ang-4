import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from './auth.service';

export class Hero {
  id:number;
  name:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  title = 'Message';
  loggedIn=false;
  currentUser='';

  constructor(private Router:Router,private AuthService:AuthService){
    if(AuthService.checkUserLogin()){
      this.loggedIn=true;

    }else{
      this.Router.navigateByUrl('/login');
    }

  }

  logout(){
    localStorage.removeItem('currentUser');
    this.loggedIn=false;
    this.currentUser='';
    //this.Router.navigateByUrl('/login');

  }
}


