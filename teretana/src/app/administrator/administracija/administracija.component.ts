import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administracija',
  templateUrl: './administracija.component.html',
  styleUrls: ['./administracija.component.css']
})
export class AdministracijaComponent implements OnInit {

  public kliknuto:string = "dodajZaposlenog";

  constructor() { }

  dodajZaposlenogClick() {
    this.kliknuto = "dodajZaposlenog";
  }

  dodajLokacijuClick() {
    this.kliknuto = "dodajLokaciju";
  }

  dodajTreningClick() {
    this.kliknuto = "dodajTrening";
  }

  pretraziZaposlenogClick() {
    this.kliknuto = "pretraziZaposlenog";
  }

  pretraziLokacijuClick() {
    this.kliknuto = "pretraziLokaciju";
  }

  pretraziTreningClick() {
    this.kliknuto = "pretraziTrening";
  }



  jeDodajZaposlenog() {
    return this.kliknuto === "dodajZaposlenog";
  }

  jeDodajLokaciju() {
    return this.kliknuto === "dodajLokaciju";
  }

  jeDodajTrening() {
    return this.kliknuto === "dodajTrening";
  }

  jePretraziZaposlenog() {
    return this.kliknuto === "pretraziZaposlenog";
  }

  jePretraziLokaciju() {
    return this.kliknuto === "pretraziLokaciju";
  }

  jePretraziTrening() {
    return this.kliknuto === "pretraziTrening";
  }

  poslatUpitPretrageZaposlenog() {
    return true;
  }

  poslatUpitPretrageLokacije() {
    return true;
  }

  poslatUpitPretrageTreninga() {
    return true;
  }



  ngOnInit(): void {
  }

}
