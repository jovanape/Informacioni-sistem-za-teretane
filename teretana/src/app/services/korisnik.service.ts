import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {
  private tip_ulogovanog:string = "administrator"; //administrator recepcioner klijent
 
  public get tipUlogovanog() : string {
    return this.tip_ulogovanog;
  }

  jeUlogovan() {
    return this.tipUlogovanog != "";
  }

  jeUlogovanAdministrator() {
    return this.tipUlogovanog === "administrator";
  }

  jeUlogovanKlijent() {
    return this.tipUlogovanog === "klijent";
  }

  jeUlogovanRecepcioner() {
    return this.tipUlogovanog === "recepcioner";
  }

  jeUlogovanTrener() {
    return this.tipUlogovanog === "trener";
  }

  constructor() { }
}
