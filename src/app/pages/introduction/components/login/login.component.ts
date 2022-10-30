import { FAuthService } from './../../services/f-auth.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Es lo que se ejecuta antes que todo
  public screenWidth: number = 0;
  emailControl: FormControl = this._formBuilder.control('', [Validators.required, Validators.email]);
  passwordControl: FormControl = this._formBuilder.control('', [Validators.required, Validators.minLength(6)]);
  constructor(private _formBuilder: FormBuilder, private _fAuthService: FAuthService) { }
  //ngOnInit se ejecuta después del constructor
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }
  //Escucha los cambios en el ancho de la pantalla
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.screenWidth = event.target.innerWidth;
  }
  login(){
    this._fAuthService.login(this.emailControl.value, this.passwordControl.value);
  }
}
