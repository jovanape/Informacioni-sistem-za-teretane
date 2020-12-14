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
import { Paket2Component } from './paket_2/paket_2.component'
import { LicenceComponent } from './licence/licence.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AdministracijaComponent } from './administrator/administracija/administracija.component';
import { Paket3Component } from './paket_3/paket_3.component';
import { Paket130Component } from './paket_1_30/paket_1_30.component';
import { Paket230Component } from './paket_2_30/paket_2_30.component';
import { Paket330Component } from './paket_3_30/paket_3_30.component';

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
    LicenceComponent,
    LoginComponent,
    RegisterComponent,
    AdministracijaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
