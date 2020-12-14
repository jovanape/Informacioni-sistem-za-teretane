import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-izmena-takmicenja',
  templateUrl: './izmena-takmicenja.component.html',
  styleUrls: ['./izmena-takmicenja.component.css']
})
export class IzmenaTakmicenjaComponent implements OnInit, OnDestroy {

  public treneri : string[] = ['Žika Marić', 'Jelena Stanić', 'Milica Kostić', 'Lazar Marković'];
  public discipline : string[] = ['Sklekovi', 'Box', 'Kick box', 'Izdržaj', 'Zgibovi', 'Trka na 500m', 'Rvanje'];
  public lokacije: string[] = ['Teretana Studentski trg', 'Teretana Jagićeva', 'Teretana Svetog Nikole'];
  
 // public routeSub: Subscription;
  public broj: number = 2;

  public naziv: string = "";
  public datum: string = "";
  public vreme: string = "";
  public lokacija_t: string = "";
  public discipline_t: string = "";
  public nagrade: string = "";
  public participacija: number = 0;
  public sudije: string = "";
  public dodatne_info: string = "";

  constructor(private route: ActivatedRoute,private router: Router) {
   
  
    if(this.broj === 1){
      this.naziv = "Kick box" ;
      this.datum = "19.12.2020.";
       this.vreme = "10:00";
       this.lokacija_t = "Teretana Studentski trg";
      this.discipline_t = "Sklekovi, Box, Kick box";
       this.nagrade = "Glavna nagrada je 6 meseci besplatnog treniranja u teretani ili 3 meseca personalnih treninga.";
      this.participacija = 500;
       this.sudije = "Milica Kostić, Lazar Marković" ;
       this.dodatne_info = "";
    }else if(this.broj === 2){
      this.naziv = "Trka sa preprekama";
      this.datum = "26.12.2020.";
       this.vreme = "11:00";
       this.lokacija_t = "Teretana Jagićeva";
      this.discipline_t = "Izdržaj, Sklekovi, Zgibovi";
       this.nagrade = "Nagrade su za I mesto - 3 meseca treninga po izboru, II mesto - 2 meseca i III mesto - 1 mesec. Takmičenje je otvoreno za sve uzraste.";
      this.participacija = 500;
       this.sudije = "Žika Marić, Jelena Stanić";
       this.dodatne_info = "Takmičenje je otvoreno za sve uzraste.";
    }
   }



  ngOnInit(): void {
    // this.routeSub = this.route.params.subscribe(params => {
    //   this.broj = params['takmicenjeId'];

    // });
  }

  sacuvajIzmene(){
    window.alert("Sačuvane su izmene");
    this.router.navigateByUrl('/#takmicenja');
  }

  ngOnDestroy():void{
    // this.routeSub.unsubscribe();
  }
}
