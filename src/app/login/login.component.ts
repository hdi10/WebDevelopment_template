import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


declare const myTest: any;
var login_attempts = 3;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  hide = true;
  username: string | undefined;
  password: string | undefined;
  form: any;
  formControlName: any;

  constructor(private router: Router) {

  }

  ngOnInit(): void {

    document.addEventListener('mousemove', (e) => {

      console.log(e)

      const mouseX = e.clientX;


    })


  }

  LoginUser() {
    if (this.username == "Admin" && this.password == "Admin") {
      console.log("welcome")



      window.alert("succes");

      this.router.navigate(['home']);
      return true;
    } else {
      if (login_attempts == 0) {
        alert("No more Login Attempts")
      } else {
        login_attempts = login_attempts - 1;
        alert("Login Credentials Incorrect. " + login_attempts + " attempts left")
        if (login_attempts == 0) {

        }
      }

    }
    return false;
  }

  onClick() {
    console.log("test")






    myTest();
  }

}
