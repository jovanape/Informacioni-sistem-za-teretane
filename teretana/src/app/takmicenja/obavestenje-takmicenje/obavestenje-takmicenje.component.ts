import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-obavestenje-takmicenje',
  templateUrl: './obavestenje-takmicenje.component.html',
  styleUrls: ['./obavestenje-takmicenje.component.css']
})
export class ObavestenjeTakmicenjeComponent implements OnInit {

  constructor(private router: Router) { }

  posaljiObavestenje(){
    window.alert("Uspesno ste zakazali takmicenje i poslali obaveštenje!");
    this.router.navigateByUrl('/#takmicenja');
  }

  preskociObavestenje(){
    window.alert("Uspesno ste zakazali takmicenje");
    this.router.navigateByUrl('/#takmicenja');
  }

  ngOnInit(): void {
  }

}
