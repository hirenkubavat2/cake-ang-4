import { Injectable } from '@angular/core';
import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot} from "@angular/router";
import  {Observable} from "rxjs";

@Injectable()
export class AuthService implements CanActivate{
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log(state.url);
    if(state.url=='/login' && this.checkUserLogin()){
      return true;
    }
    else {
      return true;
    }
  }
  currentUser='';
  constructor() { }

  checkUserLogin():boolean{
    this.currentUser=JSON.parse(localStorage.getItem('currentUser'));
    if(this.currentUser){
      return true;
    }else{
      return false;
    }
  }

}
