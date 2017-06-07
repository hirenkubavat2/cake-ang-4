import { Injectable } from '@angular/core';
import {Http,Headers,Response,RequestOptions} from '@angular/http';
import 'rxjs';
import {Observable} from "rxjs/Observable";
import { AuthService} from './auth.service';


@Injectable()


export class SavedataService {

    public token='';
    public userId=0;

    constructor(private http: Http,private authService:AuthService) {
        this.token=this.authService.token;
        this.userId=this.authService.userId;
    }

    addToken(){
        return {'token':this.token,'loggedInId':this.userId};
    }

    saveData(data): Observable<any> {
        return this.http.post('api/users/add',
            Object.assign({},this.addToken(),{
                "password": data.password,
                "email": data.email,
                "username":data.email,
                "first_name":data.first_name,
                "last_name":data.last_name,
                "roles_id":data.roles_id,
                "token": this.token
            })
        );
    }

    updateUser(data,id:number):Observable<any>{
        return this.http.post('/api/users/update',
            Object.assign({},this.addToken(), {
                "first_name":data.first_name,
                "last_name":data.last_name,
                "email":data.email,
                "roles_id":data.roles_id,
                "id":id
            })
        );
    }

    getData(): Observable<any>{
        return this.http.post('/api/users/list',this.addToken()).map(data=> data.json());
    }

    login(data) : Observable<any>{
        return this.http.post("api/login/data",{
            'email':data.email,
            'password':data.password
        });
    }


    getUserDetails(id:number){
        return this.http.post('api/users/list/'+id,
            Object.assign({},this.addToken())
        ).map(data=> data.json());

    }

    saveRole(data): Observable<any>{
        let headers=new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.post('/api/roles/add',
            Object.assign({},this.addToken(),
            {
            'role':data.name,
            'active':1

        })
        );
    }

    createAuthorizationHeader(headers:Headers){
        headers.append('Access-Control-Allow-Origin','*');
    }

    getRoles(){
        return this.http.post('/api/roles/list',
            Object.assign({},this.addToken())
        ).map(data=> data.json());
    }

    updateRole(id,data){
        return this.http.post('/api/roles/edit/'+id,
            Object.assign({},this.addToken(),
            {
            'role':data.name,
            'active':1,
            'id':id
        })
        );
    }

    getRoleById(id:number){
        if(id>0)
            return this.http.post('/api/roles/get/'+id,
                Object.assign({},this.addToken())
            ).map(data=>data.json());
        else
            return this.http.post('/api/roles/get',
                Object.assign({},this.addToken())
            ).map(data=>data.json());
    }

    deleteRole(id:number){
        return this.http.post('/api/roles/delete/'+id,
            Object.assign({},this.addToken(),{'id':id})
        ).map(data=>data.json())

    }
    deleteUser(id:number){
        return this.http.post('/api/users/delete',
            Object.assign({},this.addToken(),
            {
            'id':id
        })
        );
    }
}
