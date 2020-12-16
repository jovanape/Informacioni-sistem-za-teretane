import { Component, OnInit } from '@angular/core';
import { KorisnikService } from '../services/korisnik.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-licence',
  templateUrl: './licence.component.html',
  styleUrls: ['./licence.component.css']
})
export class LicenceComponent implements OnInit {

  public programs = [{id: '1',
                      type:'Personalni trener', 
                      description: 'Ne samo da zanimanje personalni trener spada među novija, već se smatra i izuzetno perspektivnim, jer postoji velika potreba za osobama koje su kvalifikovane za njegovo obavljanje, ali je isto tako i izuzetno velika tražnja na tržištu rada. A kako se od svakog kandidata koji želi da aplicira na ovo radno mesto zahteva i sertifikat relevantne institucije, to svako ko želi da se bavi ovim poslom treba da završi specijalizovanu obuku i kurs za personalnog trenera.',
                      trainers: ['Petar Petrović', 'Marko Marković'],
                      location: 'Teretana Studentski Trg 16',
                      requiredDocuments: 'Potvrda o učestvovanju na nekom sportskom takmičenju ili osvajanju neke nagrade na takmičenju.',
                      courseStart: '01/15/2021',
                      courseEnd: '04/15/2021',
                      commissionMembers: ['Laza Lazić', 'Ana Anić'],
                      examDate: '04/25/2021',
                      examTimeStart: '10:00', 
                      examTimeFinish: '15:00',
                      article_id: 'licence-tabs-1',
                      img: 'licence-personal.jpg'
                    },
                    {id: '2',
                    type:'Trener grupnih programa', 
                    description: 'Ovaj program nudi osposobljavanje za sportsko rekreativnog voditelja za grupne fitnes programe i kroz specijalizovanu nastavu je usmeren na Kardio programe i Body and Mind programe. Nastavni sadržaj stručnog osposobljavanja podeljen je u dve osnovne celine. Prva celina predstavlja opšti deo nastave, dok je drugi deo nastave usmeren ka specijalizaciji za rad sa grupom vežbača uz muzičku pratnju.',
                    trainers: ['Laza Lazić', 'Marko Marković'],
                    location: 'Teretana Studentski Trg 16',
                    requiredDocuments: 'Potvrda o učestvovanju na nekom sportskom takmičenju ili osvajanju neke nagrade na takmičenju.',
                    courseStart: '01/25/2021',
                    courseEnd: '05/25/2021',
                    commissionMembers: ['Petar Petrović', 'Ana Anić'],
                    examDate: '06/01/2021',
                    examTimeStart: '12:00', 
                    examTimeFinish: '15:00',
                    article_id: 'licence-tabs-2',
                    img: 'licence-group.jpg'},
                    {id: '3',
                     type:'Les Mills instruktor', 
                     description: 'Les Mills instruktori se ističu svojim fantastičnim radom sa vežbačima, svojom ambicijom, veštinom, fizičkom spremnošću i gracioznosti. Postanite i vi Les Mills instruktor.',
                     trainers: ['Laza Lazić', 'Ana Anić'],
                     location: 'Teretana Jagićeva',
                     requiredDocuments: 'Potvrda o učestvovanju na nekom sportskom takmičenju ili osvajanju neke nagrade na takmičenju.',
                     courseStart: '05/25/2021',
                     courseEnd: '08/25/2021',
                     commissionMembers: ['Petar Petrović'],
                     examDate: '08/27/2021',
                     examTimeStart: '15:00', 
                     examTimeFinish: '20:00',
                     article_id: 'licence-tabs-3',
                     img: 'licence-lesmills.jpg'
                    }]

  public tipUlogovanog:string;

  public openNewLicenceForm = false;
  public newLicenceForm: FormGroup;

  public openClientCheckInForm = false;
  public clientCheckInForm: FormGroup;

  public openReceptionistCheckInForm = false;
  public receptionistCheckInForm: FormGroup;

  constructor(private korisnikService: KorisnikService,
              private formBuilder: FormBuilder) {
    this.tipUlogovanog = korisnikService.tipUlogovanog;

    this.newLicenceForm = this.formBuilder.group({
      type: ['', [Validators.required]],
      description: ['', [Validators.required]],
      trainers: ['', [Validators.required]],
      location: ['', [Validators.required]],
      requiredDocuments: ['', [Validators.required]],
      courseStart: ['', [Validators.required]],
      courseEnd: ['', [Validators.required]],
      commissionMembers: ['', [Validators.required]],
      examDate: ['', [Validators.required]],
      examTimeStart: ['', [Validators.required]],
      examTimeFinish: ['', [Validators.required]],
    });

    this.clientCheckInForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      membershipCardNum: ['', [Validators.required]],
      yearsInSport: ['', [Validators.required]],
      competitionDoc: ['', [Validators.required]],
      sportInfo: ['', [Validators.required]]
    });

    this.receptionistCheckInForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      membershipCardNum: ['', [Validators.required]],
      yearsInSport: ['', [Validators.required]],
      competitionDoc: ['', [Validators.required]],
      sportInfo: ['', [Validators.required]]
    });
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

  public addNewLicenceClicked(){
    this.openNewLicenceForm = true;
  }

  public checkInClicked(){
    this.openClientCheckInForm = true;
  }

  public checkInClicked2(){
    this.openReceptionistCheckInForm = true;
  }

  public sendNewLicenceInfo(formData: any){

    console.log(formData)

    if(!this.newLicenceForm.valid){
      window.alert('Formular nije validan. Ispravite podatke.');
      return;
    }

    /* Ovde se salju podaci */

    window.alert('Novi program obuke je uspešno dodat!');
    
    this.newLicenceForm.reset();
    this.openNewLicenceForm = false;
  }

  public clearForm(){
    this.newLicenceForm.reset();
    this.openNewLicenceForm = false;
  }


  public sendClientInfo(formData: any){

    console.log(formData)

    if(!this.clientCheckInForm.valid){
      window.alert('Formular nije validan. Ispravite podatke.');
      return;
    }

    /* Ovde se salju podaci */

    window.alert('Uspešno ste se prijavili!');
    
    this.clientCheckInForm.reset();
    this.openClientCheckInForm = false;
  }

  public sendClientInfo2(formData: any){

    console.log(formData)

    if(!this.receptionistCheckInForm.valid){
      window.alert('Formular nije validan. Ispravite podatke.');
      return;
    }

    /* Ovde se salju podaci */

    window.alert('Klijent je uspešno prijavljen!');
    
    this.receptionistCheckInForm.reset();
    this.openReceptionistCheckInForm = false;
  }

  public clearCheckInForm(){
    this.clientCheckInForm.reset();
    this.openClientCheckInForm = false;
  }

  public clearCheckInForm2(){
    this.receptionistCheckInForm.reset();
    this.openReceptionistCheckInForm = false;
  }
  
}
