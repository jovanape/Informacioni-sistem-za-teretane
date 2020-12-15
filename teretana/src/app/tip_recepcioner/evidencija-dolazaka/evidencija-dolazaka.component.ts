import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evidencija-dolazaka',
  templateUrl: './evidencija-dolazaka.component.html',
  styleUrls: ['./evidencija-dolazaka.component.css']
})
export class EvidencijaDolazakaComponent implements OnInit {

  public pretraga: boolean = false;
  public datum: Date = new Date();
  public pronadjen: boolean = false;
  public nePostoji: boolean = false;

  constructor() { }

  pretrazi(){
    this.pretraga = true;
    //ovde bi se vrsila pretraga 
    //ako ne postoji clan nePostoji postaje true
    //ako nadje pronadjen postaje true

  }
  ngOnInit(): void {
  }

}
