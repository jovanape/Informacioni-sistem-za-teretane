import { Component, OnInit } from '@angular/core';
import { KorisnikService } from '../services/korisnik.service';

@Component({
  selector: 'app-igraonica',
  templateUrl: './igraonica.component.html',
  styleUrls: ['./igraonica.component.css']
})
export class IgraonicaComponent implements OnInit {
  public tipUlogovanog:string;

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

  jeNekiOdPreostalih() {
    return !this.jeUlogovanKlijent() && !this.jeUlogovanRecepcioner();
  }

  ngOnInit(): void {
  }

}
