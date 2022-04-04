import { Injectable } from '@angular/core';
import { Auth, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { user } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: user = {
    isLoggedIn: false,
  };

  constructor(private auth: Auth) { }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider())
      .then((res) => {
        this.user = {
          ...res.user.providerData[0],
          isLoggedIn: true
        };
      })
  }

  logout() {
    this.auth.signOut();
  }
}
