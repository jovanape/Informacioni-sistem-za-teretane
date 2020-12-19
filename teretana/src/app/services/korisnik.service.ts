import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {
  private tip_ulogovanog:string = "recepcioner"; //administrator recepcioner klijent trener personalni_trener
 
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

  /* Odnosi se na grupnog trenera */
  jeUlogovanTrener() {
    return this.tipUlogovanog === "trener";
  }

  jeUlogovanPersonalniTrener() {
    return this.tipUlogovanog === "personalni_trener";
  }


  constructor() { }
}
