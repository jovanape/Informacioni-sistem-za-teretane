import { Component, OnInit } from '@angular/core';
import { KorisnikService } from '../services/korisnik.service';

@Component({
  selector: 'app-igraonica',
  templateUrl: './igraonica.component.html',
  styleUrls: ['./igraonica.component.css']
})
export class IgraonicaComponent implements OnInit {
  public tipUlogovanog:string;

  //Za recepcionera
  
  public pretraga: boolean = false;
  public datum: Date = new Date();
  public pronadjen: boolean = false;
  public nePostoji: boolean = false;
  public listaIgraonica!: Igraonica[];


  constructor(private korisnikService: KorisnikService) {
    this.tipUlogovanog = korisnikService.tipUlogovanog;
    this.listaIgraonica = [
      {paket: 'Mini do 3 godine', preostaloTermina: 5},
      {paket: 'Srednji junior', preostaloTermina: 2}
    ];
  }

  jeUlogovan() {
    return this.korisnikService.jeUlogovan();
  }
  
  jeUlogovanAdministrator() {
    return this.korisnikService.jeUlogovanAdministrator();
  }
  
  jeUlogovanKlijent() {
    return this.korisnikService.jeUlogovanKlijent();
  }

  jeUlogovanRecepcioner() {
    return this.korisnikService.jeUlogovanRecepcioner();
  }

  jeUlogovanTrener() {
    return this.korisnikService.jeUlogovanTrener();
  }

  jeNekiOdPreostalih() {
    return !this.jeUlogovanKlijent() && !this.jeUlogovanRecepcioner();
  }

  pretrazi(){
    this.pretraga = true;

  }

  ngOnInit(): void {
  }

}

class Igraonica {  
  paket!: string;  
  preostaloTermina!: number;  
}  
