import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','./assets/css/style.css','./assets/fonts/material-icon/css/material-design-iconic-font.min.css']
})
export class LoginComponent implements OnInit {

  checkCust = new FormGroup({
    username : new FormControl(),
    password: new FormControl()
  });

  checkResp: any;

  constructor(private LoginService: LoginService, public router:Router) { }

  ngOnInit(): void {
  }

  verify(){
    console.log(this.checkCust.value)
    if(this.checkCust.controls.username.value == null || this.checkCust.controls.password.value == null){
      alert("Please enter all the Fields")
    }

    else{
      this.LoginService.checkCusto(this.checkCust.value).subscribe((Response)=>{
        this.checkResp = Response;
        if (this.checkResp.message == "LoggedIn"){
          alert(this.checkResp.message)
          this.router.navigate(['dashboard'])
          //this.router.navigate([{path:"login", component:DashboardComponent}])
        }
          else{
            alert(this.checkResp.message)
            this.router.navigate(['login'])
          }
      })
    }
  }
}
