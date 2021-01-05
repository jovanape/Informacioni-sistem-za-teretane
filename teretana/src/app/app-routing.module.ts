import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { Paket1Component } from './paket_1/paket_1.component';
import { Paket2Component } from './paket_2/paket_2.component';
import { Paket3Component } from './paket_3/paket_3.component';
import { Paket130Component } from './paket_1_30/paket_1_30.component';
import { Paket230Component } from './paket_2_30/paket_2_30.component';
import { Paket330Component } from './paket_3_30/paket_3_30.component';
import { KupovinaPaketaComponent } from './kupovina_paketa/kupovina_paketa.component';
import { KupovinaPaketaIgraoniceComponent } from './kupovina_paketa_igraonice/kupovina_paketa_igraonice.component';
import { TreneriComponent } from './treneri/treneri.component';

import { FormaPlacanjeComponent } from './forma_za_placanje/forma_za_placanje.component';

import { PaketDeciji12TerminaComponent } from './igraonica_paketi/paket_deciji_12_termina/paket_deciji_12_termina.component';
import { PaketPS12TerminaComponent } from './igraonica_paketi/paket_PS_12_termina/paket_PS_12_termina.component';
import { PaketPS30TerminaComponent } from './igraonica_paketi/paket_PS_30_termina/paket_PS_30_termina.component';
import { PaketDeciji30TerminaComponent } from './igraonica_paketi/paket_deciji_30_termina/paket_deciji_30_termina.component';
import { IzmenaTakmicenjaComponent } from './takmicenja/izmena-takmicenja/izmena-takmicenja.component';
import { KreiranjeTakmicenjaComponent } from './takmicenja/kreiranje-takmicenja/kreiranje-takmicenja.component';
import { ObavestenjeTakmicenjeComponent } from './takmicenja/obavestenje-takmicenje/obavestenje-takmicenje.component';
import { OtkazivanjeTakmicenjaComponent } from './takmicenja/otkazivanje-takmicenja/otkazivanje-takmicenja.component';
import { ParticipacijaTakmicenjeComponent } from './takmicenja/participacija-takmicenje/participacija-takmicenje.component';
import { PrijaviTakmicaraComponent } from './takmicenja/prijavi-takmicara/prijavi-takmicara.component';

import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

import { ProgramiComponent } from './programi/programi.component';
import { IgraonicaPonudeComponent } from './igraonica_ponude/igraonica_ponude.component'
import { RezultatiIspitaComponent } from './licence/rezultati-ispita/rezultati-ispita.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'paket_1', component: Paket1Component },
  { path: 'paket_2', component: Paket2Component },
  { path: 'paket_3', component: Paket3Component },
  { path: 'paket_1_30', component: Paket130Component },
  { path: 'paket_2_30', component: Paket230Component },
  { path: 'paket_3_30', component: Paket330Component },
  { path: 'kupovina_paketa', component: KupovinaPaketaComponent },
  { path: 'kupovina_paketa_igraonice', component: KupovinaPaketaIgraoniceComponent },
  { path: 'treneri', component: TreneriComponent },
  { path: 'forma_za_placanje', component: FormaPlacanjeComponent },
  { path: 'paket_deciji_12_termina', component: PaketDeciji12TerminaComponent },
  { path: 'paket_PS_12_termina', component: PaketPS12TerminaComponent },
  { path: 'paket_PS_30_termina', component: PaketPS30TerminaComponent },
  { path: 'paket_deciji_30_termina', component: PaketDeciji30TerminaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'newCompetition', component: KreiranjeTakmicenjaComponent },
  { path: 'newCompetitor', component: PrijaviTakmicaraComponent },
  { path: 'participacija', component: ParticipacijaTakmicenjeComponent },
  { path: 'obavestenje', component: ObavestenjeTakmicenjeComponent },
  { path: 'programi', component: ProgramiComponent },
  { path: 'otkazivanjeTakmicenja', component: OtkazivanjeTakmicenjaComponent }, 
  { path: 'izmenaTakmicenja/:takmicenjeId', component: IzmenaTakmicenjaComponent },
  { path: 'igraonica_ponude', component: IgraonicaPonudeComponent },
  { path: 'rezultatiIspita/:ispitId', component: RezultatiIspitaComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// export const appRoutingModule = RouterModule.forRoot(routes);
