import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IntroductionModule } from './pages/introduction/introduction.module';

@NgModule({
  //COMPONENTES
  declarations: [
    AppComponent
  ],
  //MODULOS
  imports: [
    BrowserModule,
    AppRoutingModule,
    IntroductionModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    NgbModule
  ],
  //APIS
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  //MODULOS, COMPONENTES
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
