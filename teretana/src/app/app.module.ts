import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { InfoComponent } from './info/info.component';
import { RasporedComponent } from './raspored/raspored.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { ProgramiComponent } from './programi/programi.component';
import { PromoDeoComponent } from './promo-deo/promo-deo.component';
import { CeonovnikComponent } from './ceonovnik/ceonovnik.component';
import { TakmicenjaComponent } from './takmicenja/takmicenja.component';
import { Paket1Component } from './paket_1/paket_1.component';
import { LicenceComponent } from './licence/licence.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AdministracijaComponent } from './administrator/administracija/administracija.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { KreiranjeTakmicenjaComponent } from './takmicenja/kreiranje-takmicenja/kreiranje-takmicenja.component';
import { PrijaviTakmicaraComponent } from './takmicenja/prijavi-takmicara/prijavi-takmicara.component';
import { EvidencijaDolazakaComponent } from './tip_recepcioner/evidencija-dolazaka/evidencija-dolazaka.component';
import { PlacanjeClanarineComponent } from './tip_recepcioner/placanje-clanarine/placanje-clanarine.component';
import { IgraonicaComponent } from './igraonica/igraonica.component';
import { LicencaComponent } from './licenca/licenca.component';
import { TreninziComponent } from './treninzi/treninzi.component';
import { EvidencijeComponent } from './tip_recepcioner/evidencije/evidencije.component';
import { ParticipacijaTakmicenjeComponent } from './takmicenja/participacija-takmicenje/participacija-takmicenje.component';
import { ObavestenjeTakmicenjeComponent } from './takmicenja/obavestenje-takmicenje/obavestenje-takmicenje.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    InfoComponent,
    RasporedComponent,
    PocetnaComponent,
    ProgramiComponent,
    PromoDeoComponent,
    CeonovnikComponent,
    TakmicenjaComponent,
    Paket1Component,
    LicenceComponent,
    LoginComponent,
    RegisterComponent,
    AdministracijaComponent,
    KreiranjeTakmicenjaComponent,
    PrijaviTakmicaraComponent,
    EvidencijaDolazakaComponent,
    PlacanjeClanarineComponent,
    IgraonicaComponent,
    LicencaComponent,
    TreninziComponent,
    EvidencijeComponent,
    ParticipacijaTakmicenjeComponent,
    ObavestenjeTakmicenjeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
