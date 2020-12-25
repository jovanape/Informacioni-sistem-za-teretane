import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Zaposleni } from '../model/zaposleni.model';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {
  
  private readonly zaposleniUrl = 'http://localhost:8081/employee/';
  private zaposleni!: Zaposleni;
  private username: string = "Leonic";
  private tip_ulogovanog:string = "trener"; //administrator recepcioner klijent trener personalni_trener
 
  //Napraviti drugi servis za login koji ce proveriti da li postoji korisnik i lozinku
  constructor(private http:HttpClient) {
    this.inicijalizujUlogovanog();
   }

   inicijalizujUlogovanog() {
    const sub = this.http
    .get<Zaposleni>(this.zaposleniUrl + this.username + "/")
    .subscribe(zap => {
      console.log("inicijalizujUlogovanog(): ");
      console.log(zap);
      this.zaposleni = zap;
    });
   }
  
   public vratiIdZaposlenog(): number {
     return this.zaposleni.employeeId;
   }

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

}
