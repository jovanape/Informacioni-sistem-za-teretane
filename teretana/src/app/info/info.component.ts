import { Component, OnInit } from '@angular/core';
import { KorisnikService } from '../services/korisnik.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  public tipUlogovanog:string;
  

  constructor(private korisnikService: KorisnikService) { 
    this.tipUlogovanog = korisnikService.tipUlogovanog;
  }

  jeUlogovanAdministrator() {
    return this.korisnikService.jeUlogovanAdministrator();
  }

  ngOnInit(): void {
  }

}
