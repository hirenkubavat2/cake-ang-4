import { Component, OnInit } from '@angular/core';
import { SavedataService } from '../savedata.service';
import { Router } from '@angular/router';



declare var eModal:any;

@Component({
  selector: 'app-rolelist',
  templateUrl: './rolelist.component.html',
  styleUrls: ['./rolelist.component.css']
})
export class RolelistComponent implements OnInit {
  roles:any;
  constructor(private savedataService:SavedataService,private router:Router) {
    this.savedataService.getRoles().subscribe(data=>{
      this.roles=data.data;
      console.log(this.roles);
    });
  }

  ngOnInit() {

  }

  updateRole(item){
      this.router.navigateByUrl('/roles/edit/'+item.id);
  }

  deleteRole(item){

    /*var options = {
      message: "Do you really want to delete ?",
      title: 'Delete Confirmation',
      size: 'sm',
      subtitle: 'smaller text header',
      label: "Yes"
    };*/
    //eModal.confirm(options).then(function(){},function(){ return ;});

    if(confirm('Do you really want to delete ?')){
      this.savedataService.deleteRole(item.id).subscribe(
          res=>{
            this.roles.splice(this.roles.indexOf(item),1);
          },
          err=>{
            console.log(err);
          }
          );
    }

  }

}

