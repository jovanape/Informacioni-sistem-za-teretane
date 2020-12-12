import { Component, OnInit } from '@angular/core';
import { KorisnikService } from '../services/korisnik.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public tipUlogovanog:string;
  

  constructor(private korisnikService: KorisnikService) { 
    this.tipUlogovanog = korisnikService.tipUlogovanog;
  }

  jeUlogovan() {
    return this.korisnikService.jeUlogovan();
  }

  jeUlogovanAdministrator() {
    console.log("je administrator: " + this.korisnikService.jeUlogovanAdministrator());
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

  ngOnInit(): void {
  }

}
