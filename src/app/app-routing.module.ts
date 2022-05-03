import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafic1Component } from './pages/grafic1/grafic1.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent},
      { path: 'progress', component: ProgressComponent},
      { path: 'grafic1', component: Grafic1Component},
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]
  },
  { path: 'signin', component: SigninComponent},
  { path: 'signup', component: SignupComponent},

  { path: '**', component: NopagefoundComponent},
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
