import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';
import { ArticlesComponent } from './articles/articles.component';
import { GetpostserviceService} from './getpostservice.service';
import { UsersComponent } from './users/users.component';
import {AuthService} from "./auth.service";
import { NeosoftComponent } from './neosoft/neosoft.component';
import {SavedataService} from './savedata.service';
import { UserlistComponent } from './userlist/userlist.component';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { RolesComponent } from './roles/roles.component';
import { RolelistComponent } from './rolelist/rolelist.component';
import { RoleupdateComponent } from './roleupdate/roleupdate.component';
import {ImageUploadModule} from "angular2-image-upload";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    PostsComponent,
    ArticlesComponent,
    UsersComponent,
    NeosoftComponent,
    UserlistComponent,
    ItemEditComponent,
    RolesComponent,
    RolelistComponent,
    RoleupdateComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    ReactiveFormsModule,
    ImageUploadModule.forRoot()
  ],
  providers: [GetpostserviceService,AuthService,SavedataService],
  bootstrap: [AppComponent]


})
export class AppModule {}
