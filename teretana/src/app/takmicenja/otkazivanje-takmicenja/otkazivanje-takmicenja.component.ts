import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otkazivanje-takmicenja',
  templateUrl: './otkazivanje-takmicenja.component.html',
  styleUrls: ['./otkazivanje-takmicenja.component.css']
})
export class OtkazivanjeTakmicenjaComponent implements OnInit {

  constructor(private router: Router) { }

  otkaziTakmicenje(){
    window.alert("Takmicenje je otkazano i obaveštenja su poslata svim prijavljenima.");
    this.router.navigateByUrl('/#takmicenja');
  }

  ngOnInit(): void {
  }

}
