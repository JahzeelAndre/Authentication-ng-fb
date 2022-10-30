import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FAuthService {

  constructor(private _fAuth: Auth, private _router: Router) { }
  login(mail:string, password:string){
    return signInWithEmailAndPassword(this._fAuth, mail.trim(), password.trim())
    .then((credential) => {
      alert('Bienvenido ' + credential.user.email);
      this._router.navigate(['/home']);
    })
    .catch((error) => console.log(error));;
  }
  /* loginGoogle(){
    return signInWithPopup(this._fAuth,  new GoogleAuthProvider)
    .then((credential) => {
      alert('Bienvenido ' + credential.user.email);
      this._router.navigate(['/home']);
    })
    .catch((error) => console.log(error));;
  } */
  signOut() {
    return signOut(this._fAuth).then(()=> this._router.navigate(['/intro']));
  }
}
