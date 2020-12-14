import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { Paket1Component } from './paket_1/paket_1.component';
import { KreiranjeTakmicenjaComponent } from './takmicenja/kreiranje-takmicenja/kreiranje-takmicenja.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'basicx12', component: Paket1Component },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'newCompetition', component: KreiranjeTakmicenjaComponent},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// export const appRoutingModule = RouterModule.forRoot(routes);
