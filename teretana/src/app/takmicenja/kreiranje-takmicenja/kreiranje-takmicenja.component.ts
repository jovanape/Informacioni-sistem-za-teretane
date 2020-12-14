import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kreiranje-takmicenja',
  templateUrl: './kreiranje-takmicenja.component.html',
  styleUrls: ['./kreiranje-takmicenja.component.css']
})
export class KreiranjeTakmicenjaComponent implements OnInit {

  public treneri : string[] = ['Žika Marić', 'Jelena Stanić', 'Milica Kostić', 'Lazar Marković'];
  public discipline : string[] = ['Sklekovi', 'Box', 'Kick box', 'Izdržaj', 'Zgibovi', 'Trka na 500m', 'Rvanje'];
  public lokacije: string[] = ['Teretana Studentski trg', 'Teretana Jagićeva', 'Teretana Svetog Nikole'];
  constructor() { }

  ngOnInit(): void {
  }

}
