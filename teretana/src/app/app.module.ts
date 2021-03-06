import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { TreneriComponent } from './treneri/treneri.component';

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
import { Paket2Component } from './paket_2/paket_2.component'
import { LicenceComponent } from './licence/licence.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AdministracijaComponent } from './administrator/administracija/administracija.component';
import { IgraonicaPonudeComponent } from './igraonica_ponude/igraonica_ponude.component';
import { Paket3Component } from './paket_3/paket_3.component';
import { Paket130Component } from './paket_1_30/paket_1_30.component';
import { Paket230Component } from './paket_2_30/paket_2_30.component';
import { Paket330Component } from './paket_3_30/paket_3_30.component';
import { KupovinaPaketaComponent } from './kupovina_paketa/kupovina_paketa.component';
import { KupovinaPaketaIgraoniceComponent } from './kupovina_paketa_igraonice/kupovina_paketa_igraonice.component';

import { PaketDeciji12TerminaComponent } from './igraonica_paketi/paket_deciji_12_termina/paket_deciji_12_termina.component';
import { PaketPS12TerminaComponent } from './igraonica_paketi/paket_PS_12_termina/paket_PS_12_termina.component';
import { PaketPS30TerminaComponent } from './igraonica_paketi/paket_PS_30_termina/paket_PS_30_termina.component';
import { PaketDeciji30TerminaComponent } from './igraonica_paketi/paket_deciji_30_termina/paket_deciji_30_termina.component';
import { FormaPlacanjeComponent } from './forma_za_placanje/forma_za_placanje.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { KreiranjeTakmicenjaComponent } from './takmicenja/kreiranje-takmicenja/kreiranje-takmicenja.component';
import { PrijaviTakmicaraComponent } from './takmicenja/prijavi-takmicara/prijavi-takmicara.component';
import { EvidencijaDolazakaComponent } from './tip_recepcioner/evidencija-dolazaka/evidencija-dolazaka.component';
import { PlacanjeClanarineComponent } from './tip_recepcioner/placanje-clanarine/placanje-clanarine.component';
import { IgraonicaComponent } from './igraonica/igraonica.component';
import { TreninziComponent } from './treninzi/treninzi.component';
import { EvidencijeComponent } from './tip_recepcioner/evidencije/evidencije.component';
import { ParticipacijaTakmicenjeComponent } from './takmicenja/participacija-takmicenje/participacija-takmicenje.component';
import { ObavestenjeTakmicenjeComponent } from './takmicenja/obavestenje-takmicenje/obavestenje-takmicenje.component';
import { OtkazivanjeTakmicenjaComponent } from './takmicenja/otkazivanje-takmicenja/otkazivanje-takmicenja.component';
import { IzmenaTakmicenjaComponent } from './takmicenja/izmena-takmicenja/izmena-takmicenja.component';
import { RezultatiIspitaComponent } from './licence/rezultati-ispita/rezultati-ispita.component';

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
    Paket2Component,
    Paket3Component,
    Paket130Component,
    Paket230Component,
    Paket330Component,
    TreneriComponent,
    KupovinaPaketaComponent,
    PaketDeciji12TerminaComponent,
    PaketPS12TerminaComponent,
    PaketPS30TerminaComponent,
    PaketDeciji30TerminaComponent,
    FormaPlacanjeComponent,
    LicenceComponent,
    LoginComponent,
    RegisterComponent,
    AdministracijaComponent,
    KreiranjeTakmicenjaComponent,
    PrijaviTakmicaraComponent,
    EvidencijaDolazakaComponent,
    PlacanjeClanarineComponent,
    IgraonicaComponent,
    TreninziComponent,
    EvidencijeComponent,
    ParticipacijaTakmicenjeComponent,
    ObavestenjeTakmicenjeComponent,
    ProgramiComponent,
    OtkazivanjeTakmicenjaComponent,
    IzmenaTakmicenjaComponent,
    IgraonicaPonudeComponent,
    RezultatiIspitaComponent,
    KupovinaPaketaIgraoniceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NoopAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
