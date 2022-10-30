import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'intro',
    loadChildren: () => import ('./pages/introduction/introduction.module')
    .then((m) => m.IntroductionModule),
  },
  {
    path: 'home',
    loadChildren: () => import ('./pages/home/home.module')
    .then((m) => m.HomeModule),
  },
  {
    path: '**',
    redirectTo: 'intro'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
