import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit() {
    console.log(this.authService.isAuth());
  }

  onLoginGoogle() {
    this.authService.loginGoogleUser()
      .then( res => {
        if (res.additionalUserInfo.isNewUser) {
          console.log(res);
        }
        this.router.navigate(['/main']);
      })
      .catch(err => console.log(err));
  }
}
