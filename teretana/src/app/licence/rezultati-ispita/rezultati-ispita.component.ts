import { Component, OnInit, Input } from '@angular/core';
import { KorisnikService } from 'src/app/services/korisnik.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rezultati-ispita',
  templateUrl: './rezultati-ispita.component.html',
  styleUrls: ['./rezultati-ispita.component.css']
})
export class RezultatiIspitaComponent implements OnInit {

  public prijavljeniKlijenti = [
    {programId: '1', type: 'Personalni trener', klijenti: [{ime: 'Ivana', prezime: 'Jovanović', brClanskeKarte: 1022}, {ime: 'Marina', prezime: 'Aleksic', brClanskeKarte: 3456}, {ime: 'Tijana', prezime: 'Jankovic', brClanskeKarte: 4545}]},
    {programId: '2',type: 'Trener grupnih programa', klijenti: [{ime: 'Teodora', prezime: 'Đermanić', brClanskeKarte: 1223}, {ime: 'Marija', prezime: 'Ranković', brClanskeKarte: 1234}, {ime: 'Irena', prezime: 'Nedeljkovic', brClanskeKarte: 2245}]}, 
    {programId: '3',type: 'Les Mills instruktor', klijenti: [{ime: 'Marija', prezime: 'Glišić', brClanskeKarte: 6745}, {ime: 'Nebojša', prezime: 'Jovanovic', brClanskeKarte: 1711}]}
  ];

  public rezultatiIspita = [
    {type: 'Personalni trener', klijenti: [{ime: 'Ivana', prezime: 'Jovanović', brClanskeKarte: 1022, ocena: 4, izdataLicenca: 'nije izdata'}, {ime: 'Marina', prezime: 'Aleksic', brClanskeKarte: 3456, ocena: 7, licenca: 'izdata'}, {ime: 'Tijana', prezime: 'Jankovic', brClanskeKarte: 4545, ocena: 8, licenca: 'izdata'}]},
    {type: 'Trener grupnih programa', klijenti: [{ime: 'Teodora', prezime: 'Đermanić', brClanskeKarte: 1223, ocena: 10, licenca: 'izdata'}, {ime: 'Marija', prezime: 'Ranković', brClanskeKarte: 1234, ocena: 8, licenca: 'izdata'}, {ime: 'Irena', prezime: 'Nedeljkovic', brClanskeKarte: 2245, ocena: 2, licenca: 'nije izdata'}]}, 
    {type: 'Les Mills instruktor', klijenti: [{ime: 'Marija', prezime: 'Glišić', brClanskeKarte: 6745, ocena: 9, licenca: 'izdata'}, {ime: 'Nebojša', prezime: 'Jovanovic', brClanskeKarte: 1711, ocena: 5, licenca: 'nije izdata'}]}
  ];

  public tipUlogovanog: string;

  public unosRezultataForm: FormGroup;
  public formInputInfos: any = [];
  
  //public brojKlijenataForm: FormGroup;
  public brojKlijenata = 0;

  //public ispitId: string;
  public prijavljeniKlijentiZaPrikaz : any;
  
  constructor(private korisnikService: KorisnikService,
              private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
      this.tipUlogovanog = korisnikService.tipUlogovanog;

      /*this.brojKlijenataForm = this.formBuilder.group({
        broj: ['', [Validators.required]]
      });*/

      this.unosRezultataForm = this.formBuilder.group({});

      this.activatedRoute.paramMap.subscribe((params) => {
        const ispitId = params.get('ispitId');
        //console.log(ispitId);
        this.prijavljeniKlijentiZaPrikaz = this.prijavljeniKlijenti.find(klijent => klijent.programId === ispitId);
        //console.log(this.prijavljeniKlijentiZaPrikaz);
      });

      console.log(this.prijavljeniKlijentiZaPrikaz);

      var klijenti = this.prijavljeniKlijenti[0].klijenti
      var brojKlijenata = klijenti.length;
      //console.log(brojKlijenata);

      interface LooseObject {
        [key: string]: any
      }
  
      var formTemplate : LooseObject = {};

      for (let i = 0; i < brojKlijenata; i++) {
        formTemplate["ocena" + i] = ['', [Validators.required]]
        formTemplate["izdataLicenca" + i] = ['', [Validators.required]]
        this.formInputInfos.push({ime: klijenti[i]["ime"], prezime: klijenti[i]["prezime"], brClanskeKarte: klijenti[i]["brClanskeKarte"], ocena: "ocena" + i, izdataLicenca: "izdataLicenca" + i});
      }
      console.log(formTemplate);
      console.log(this.formInputInfos);

      this.unosRezultataForm = this.formBuilder.group(formTemplate);      
  
    }
  

  /*public azurirajBrojKlijenata(formData: any){
    this.brojKlijenata = formData['broj'];
    //console.log(this.brojKlijenata);

    interface LooseObject {
      [key: string]: any
    }

    var formTemplate : LooseObject = {};

    for (let i = 0; i < this.brojKlijenata; i++) {
      formTemplate["ime" + i] = ['', [Validators.required]]
      formTemplate["prezime" + i] = ['', [Validators.required]]
      formTemplate["brClanskeKarte" + i] = ['', [Validators.required]]
      formTemplate["ocena" + i] = ['', [Validators.required]]
      formTemplate["izdataLicenca" + i] = ['', [Validators.required]]
      this.formControlNames.push({ime: "ime" + i}, {prezime: "prezime" + i}, {brClanskeKarte: "brClanskeKarte" + i}, {ocena: "ocena" + i}, {izdataLicenca: "izdataLicenca" + i});
    }
    console.log(formTemplate);

    this.unosRezultataForm = this.formBuilder.group(formTemplate);
  }*/


  public posaljiRezultate(formData: any){
    
    if(!this.unosRezultataForm.valid){
      window.alert('Formular nije validan. Ispravite podatke.');
      return;
    }

    /* Ovde se salju podaci */

    window.alert('Rezultati su uspešno dodati!');
    
    this.unosRezultataForm.reset();
    this.router.navigateByUrl('/#licence');
  }

  jeUlogovan() {
    return this.korisnikService.jeUlogovan();
  }
  
  jeUlogovanAdministrator() {
    return this.korisnikService.jeUlogovanAdministrator();
  }
  
  jeUlogovanKlijent() {
    return this.korisnikService.jeUlogovanKlijent();
  }

  jeUlogovanRecepcioner() {
    return this.korisnikService.jeUlogovanRecepcioner();
  }

  jeUlogovanTrener() {
    return this.korisnikService.jeUlogovanTrener();
  }


  ngOnInit(): void {
  }

}
