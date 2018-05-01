import { Component, OnInit } from '@angular/core';
import { AfServiceService } from '../af-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email:string = "";
  password:string= "";
  constructor(private af:AfServiceService) { }

  ngOnInit() {
  }

  register(){

    if (this.email != '' && this.password != '')
      {

        this.af.register(this.email,this.password).then((user)=>{

          console.log("register good",user);

        }).catch((error)=>{

          console.log("register error",error);
        });
        
      }
      else{

        //all fields are required
      }



  }

}
