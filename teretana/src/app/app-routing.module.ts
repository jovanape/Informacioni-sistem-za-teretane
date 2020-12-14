import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { Paket1Component } from './paket_1/paket_1.component';
import { KreiranjeTakmicenjaComponent } from './takmicenja/kreiranje-takmicenja/kreiranje-takmicenja.component';
import { ObavestenjeTakmicenjeComponent } from './takmicenja/obavestenje-takmicenje/obavestenje-takmicenje.component';
import { ParticipacijaTakmicenjeComponent } from './takmicenja/participacija-takmicenje/participacija-takmicenje.component';
import { PrijaviTakmicaraComponent } from './takmicenja/prijavi-takmicara/prijavi-takmicara.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'basicx12', component: Paket1Component },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'newCompetition', component: KreiranjeTakmicenjaComponent},
  { path: 'newCompetitor', component: PrijaviTakmicaraComponent},
  { path: 'participacija', component: ParticipacijaTakmicenjeComponent},
  { path: 'obavestenje', component: ObavestenjeTakmicenjeComponent},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// export const appRoutingModule = RouterModule.forRoot(routes);
