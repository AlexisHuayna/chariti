import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }
  loginGoogleUser() {
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
   }
  logoutUser() {
    return this.afAuth.auth.signOut();
  }
  isAuth() {
    return this.afAuth.authState.pipe(map(aut => aut));
  }
}
