import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from './components/login/login.component';
import { BodyComponent } from './components/body/body.component';
import { IntroductionRoutingModule } from './introduction-routing.module';


@NgModule({
  declarations: [
    LoginComponent,
    BodyComponent
  ],
  imports: [
    CommonModule,
    IntroductionRoutingModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  exports: [
    BodyComponent,
  ]
})
export class IntroductionModule { }
