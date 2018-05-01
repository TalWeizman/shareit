import { Component, OnInit } from '@angular/core';
import { AfServiceService } from '../af-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string = "";
  password:string = "";

  constructor(private af:AfServiceService) { }

  ngOnInit() {
  }

  login(){

    this.af.login(this.email,this.password).then(user => {

      console.log("login good",user)

    }).catch(error =>{

      console.log("login eroor",error)

    });

  }

  login_with_gmail(){}

}
