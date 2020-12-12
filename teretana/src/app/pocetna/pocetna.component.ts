import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css']
})
export class PocetnaComponent implements OnInit {

  public myLink = "/src/app/assets/images/gym-video.mp4";
  
  constructor() { }

  ngOnInit(): void {
  }

}
