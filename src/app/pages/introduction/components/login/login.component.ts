import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Es lo que se ejecuta antes que todo
  public screenWidth: number = 0;

  constructor() { }
  //ngOnInit se ejecuta después del constructor
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }
  //Escucha los cambios en el ancho de la pantalla
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.screenWidth = event.target.innerWidth;
  }
}
