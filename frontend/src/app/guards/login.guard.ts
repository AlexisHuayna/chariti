import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { take, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate() {
    return this.authService.angularFirebaseAuth.authState.pipe(take(1)).pipe(map(authState => !!authState)).pipe(tap(auth => {
      if (auth) {
        this.router.navigate(['/main/home']);
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }));
  }

}
