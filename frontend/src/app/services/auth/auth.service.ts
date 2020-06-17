import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public angularFirebaseAuth: AngularFireAuth) { }

  loginGoogleUser() {
    return this.angularFirebaseAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
   }

  logoutUser() {
    return this.angularFirebaseAuth.auth.signOut();
  }

  isAuth() {
    return this.angularFirebaseAuth.authState.pipe(map(aut => aut));
  }
}
