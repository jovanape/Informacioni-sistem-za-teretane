import { Component, OnInit } from '@angular/core';
import { KorisnikService } from '../services/korisnik.service';

@Component({
  selector: 'app-takmicenja',
  templateUrl: './takmicenja.component.html',
  styleUrls: ['./takmicenja.component.css']
})
export class TakmicenjaComponent implements OnInit {

  public tipUlogovanog: string;

  constructor(private korisnikService: KorisnikService) {
    this.tipUlogovanog = korisnikService.tipUlogovanog;
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

  otkaziTakmicenje(){
    
  }
  ngOnInit(): void {
  }

}
