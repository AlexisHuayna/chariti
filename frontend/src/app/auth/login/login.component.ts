import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private authSvc:AuthService) { }

  ngOnInit() {}
  
  onLoginGoogle() {
    this.authSvc.loginGoogleUser()
      .then( res => {
        if (res.additionalUserInfo.isNewUser) {
          console.log(res)
        }
        else {
          console.log(res)
        }
        this.router.navigate(['/']);
      })
      .catch(err => console.log(err));
  }
}
