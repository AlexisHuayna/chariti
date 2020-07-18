import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/other/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private userService: UserService) { }

  private user: User = {
    UserEmail: '',
    UserName: '',
    UserDescription: ''
  };
  ngOnInit() {
  }

  onLoginGoogle() {
    this.authService.loginGoogleUser()
      .then(res => {
        if (res.additionalUserInfo.isNewUser) {
          this.user.UserEmail = res.user.email;
          this.user.UserName = res.user.displayName;
          this.user.UserDescription = res.user.photoURL;
          this.userService.createUser(this.user).subscribe(
            user => this.userService.user = user
          );
        } else {
          this.userService.getUserByEmail(res.user.email).subscribe(
            user => this.userService.user = user
          );
        }
        this.router.navigate(['/main/home']);
      })
      .catch(err => console.log(err));
  }
}
