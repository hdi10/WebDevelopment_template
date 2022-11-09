import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AngularMaterialModule } from '../angular-material/angular-material.module';


declare const myTest: any;
var login_attempts = 3;

// declare the javascript function here
declare function thisOne(): any;

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

      //console.log(e)

      // mouse position
      const mouseX = e.clientX;
      const mouseY = e.clientY;


      // generating degrees
      const anchor = document.getElementById('anchor');
      const rekt = anchor!.getBoundingClientRect();
      const anchorX = rekt.left + rekt.width / 2;
      const anchorY = rekt.top + rekt.height / 2;

      const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

      console.log(angleDeg);

      // rotating eyes
      const eyes = Array.from(document.querySelectorAll('.eye') as unknown as HTMLCollectionOf<HTMLElement>)
      eyes.forEach(eye => {
        eye.style.transform = `rotate(${90 + angleDeg}deg)`;
        //anchor!.style.filter = `hue-rotate(${angleDeg}deg)`;
      })


    })

    function angle(cx: number, cy: number, ex: number, ey: number) {
      const dy = ey - cy;
      const dx = ex - cx;
      const rad = Math.atan2(dy, dx); // range [-PI,PI]
      const deg = rad * 180 / Math.PI; // rad to deg, [-180,180]
      return deg;
    }


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
