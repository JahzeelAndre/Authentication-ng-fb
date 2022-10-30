import { FAuthService } from './../../../../pages/introduction/services/f-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private _fAuthService: FAuthService) { }

  ngOnInit(): void {
  }
  signOut(){
    this._fAuthService.signOut();
  }
}
