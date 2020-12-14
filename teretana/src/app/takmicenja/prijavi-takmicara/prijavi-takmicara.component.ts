import { Component, OnInit } from '@angular/core';
import { KorisnikService } from 'src/app/services/korisnik.service';

@Component({
  selector: 'app-prijavi-takmicara',
  templateUrl: './prijavi-takmicara.component.html',
  styleUrls: ['./prijavi-takmicara.component.css']
})
export class PrijaviTakmicaraComponent implements OnInit {

  public tipUlogovanog: string;

  constructor(private korisnikService: KorisnikService) {
    this.tipUlogovanog = korisnikService.tipUlogovanog;
  }

  jeUlogovanKlijent() {
    return this.korisnikService.jeUlogovanKlijent();
  }

  jeUlogovanRecepcioner() {
    return this.korisnikService.jeUlogovanRecepcioner();
  }


  ngOnInit(): void {
  }

}
