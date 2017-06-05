import { Injectable } from '@angular/core';
import {Http,Headers,Response,RequestOptions} from '@angular/http';

import 'rxjs';
import {Observable} from "rxjs/Observable";

@Injectable()


export class SavedataService {


    constructor(private http: Http) {
        //headers.append('Access-Control-Allow-Origin','*');
    }


    saveData(data): Observable<any> {
        console.log(data);
        return this.http.post('api/users/add',{
            "password": data.password,
            "email": data.email,
            "username":data.email,
            "first_name":data.first_name,
            "last_name":data.last_name,
            "roles_id":data.roles_id
        });

    }

    updateUser(data,id:number):Observable<any>{
        return this.http.post('/api/users/update',{
            "first_name":data.first_name,
            "last_name":data.last_name,
            "email":data.email,
            "roles_id":data.roles_id,
            "id":id
        });
    }

    getData(): Observable<any>{
        return this.http.get('/api/users/list').map(data=> data.json());
    }

    login(data) : Observable<any>{

        /*let order = {data:'data'};
        this.http.post('http://localhost:8765/login', order, {

        }).subscribe(res => {
            console.log('post result %o', res);
        });
        return;*/

        return this.http.post("api/login/data",{
            'email':data.email,
            'password':data.password
        });
    }



    /*login(data): Observable<any>{
        return this.http.post('http://localhost:8765/login',{
            'email':data.email,
            'password':data.password

        });
    }*/

    getUserDetails(id:number){

        return this.http.get('api/users/list/'+id).map(data=> data.json());

    }

    updateItem(data){
        return this.http.put('https://reqres.in/api/users/'+data.id,{
            "first_name": data.first_name,
            "last_name": data.last_name
        });
    }

    saveRole(data): Observable<any>{
        let headers=new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.post('http://localhost:8765/roles/add',{
            'role':data.name,
            'active':1

        });
    }

    createAuthorizationHeader(headers:Headers){
        headers.append('Access-Control-Allow-Origin','*');
    }

    getRoles(){
        return this.http.get('/api/roles/list').map(data=> data.json());
    }

    updateRole(id,data){
        return this.http.post('/api/roles/edit/'+id,{
            'role':data.name,
            'active':1,
            'id':id
        });
    }

    getRoleById(id:number){
        if(id>0)
            return this.http.get('/api/roles/get/'+id).map(data=>data.json());
        else
            return this.http.get('/api/roles/get').map(data=>data.json());
    }

    deleteRole(id:number){
        return this.http.get('/api/roles/delete/'+id).map(data=>data.json())
        //return this.http.delete('http://localhost:8765/roles/delete/'+id);
    }
}
