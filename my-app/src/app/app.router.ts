import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { DashboardComponent} from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';
import { ArticlesComponent } from './articles/articles.component';
import { UsersComponent } from './users/users.component';
import {AuthService} from "./auth.service";
import {NeosoftComponent} from './neosoft/neosoft.component';
import {UserlistComponent} from './userlist/userlist.component';
import {ItemEditComponent} from './item-edit/item-edit.component';
import {RolesComponent} from './roles/roles.component';
import {RolelistComponent} from './rolelist/rolelist.component';
import {RoleupdateComponent} from './roleupdate/roleupdate.component';

export const router: Routes=[
    //{ path: '',redirectTo:"dashboard",pathMatch:'full' },
    { path: 'dashboard',component: DashboardComponent,canActivate :[AuthService]},
    { path: 'login',component:LoginComponent },
    { path: 'posts',component: PostsComponent},
    { path: 'articles',component: ArticlesComponent ,canActivate :[AuthService]},
    { path: 'users',component: UsersComponent },
    { path: 'neosoft',component: NeosoftComponent},
    { path: 'users/list',component:UserlistComponent },
    { path: 'home',component:AppComponent},
    { path: 'user/:id',component:UsersComponent},
    { path: 'roles/add',component:RolesComponent},
    { path: 'roles/list',component:RolelistComponent},
    { path: 'roles',component:RolelistComponent},
    { path: 'roles/edit/:id',component:RoleupdateComponent}

];

export  const routes: ModuleWithProviders = RouterModule.forRoot(router);

