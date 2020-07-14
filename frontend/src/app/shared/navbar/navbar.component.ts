import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/other/interfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthService]
})
export class NavbarComponent implements OnInit {
  public userImg = '';
  public userName = '';
  public isLogged = false;
  public currentuser = '';
  public currentUser: User;
  constructor(private authService: AuthService, private router: Router, private userService: UserService) {
    this.getCurrentUser();
  }

  ngOnInit() {}

  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.isLogged = true;
        this.currentuser = auth.email;
        this.userImg = auth.photoURL;
        this.userName = auth.displayName;
        this.userService.getUserByEmail(auth.email).subscribe(user => {
          this.currentUser = user;
        });
      } else {
        this.isLogged = false;
      }
    });
  }

  onLogout() {
    this.authService.logoutUser()
      .then(auth => {
        this.router.navigate(['/login']);
      });
  }

}
