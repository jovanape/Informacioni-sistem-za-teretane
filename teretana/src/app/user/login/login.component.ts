import { Component, OnInit } from '@angular/core';
import { KorisnikService } from 'src/app/services/korisnik.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public jeValjanaLozinka: boolean = false;

  constructor(private korisnikService: KorisnikService, 
              public router: Router) { }

  ngOnInit(): void {
  }

  postaviUsername(event:Event){
    this.korisnikService.postaviUlogovanog("trener");
    this.korisnikService.postaviUsername((<HTMLInputElement>event.target).value);
  }

  proveriLozinku(event:Event) {
    this.jeValjanaLozinka = this.korisnikService.proveriLozinku((<HTMLInputElement>event.target).value);
  }

}
