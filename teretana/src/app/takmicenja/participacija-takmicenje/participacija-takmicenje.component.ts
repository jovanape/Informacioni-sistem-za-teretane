import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from 'src/app/services/korisnik.service';

@Component({
  selector: 'app-participacija-takmicenje',
  templateUrl: './participacija-takmicenje.component.html',
  styleUrls: ['./participacija-takmicenje.component.css']
})
export class ParticipacijaTakmicenjeComponent implements OnInit {

  public tipUlogovanog: string;
  public brojPrijave: number = 26;

  constructor(private korisnikService: KorisnikService, private router: Router) {
    this.tipUlogovanog = korisnikService.tipUlogovanog;
  }

  jeUlogovanKlijent() {
    return this.korisnikService.jeUlogovanKlijent();
  }

  jeUlogovanRecepcioner() {
    return this.korisnikService.jeUlogovanRecepcioner();
  }

  prijavaUneta(){
    window.alert("Prijava je uneta u sistem. Broj prijave: " + this.brojPrijave);
    this.router.navigateByUrl('/#takmicenja');
  }
  ngOnInit(): void {
  }

}
