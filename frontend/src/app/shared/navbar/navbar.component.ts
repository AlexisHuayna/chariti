import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

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
  constructor(private authSvc: AuthService, private router: Router) {
    this.getCurrentUser();
   }

  ngOnInit() {}

  getCurrentUser() {
    this.authSvc.isAuth().subscribe(auth => {
      if (auth) {
        this.isLogged = true;
        this.currentuser = auth.email;
        this.userImg = auth.photoURL;
        this.userName = auth.displayName;
      } else {
        this.isLogged = false;
      }
    });
  }

  onLogout() {
    this.authSvc.logoutUser()
      .then(auth => {
        this.router.navigate(['/login']);
      });
  }

}
