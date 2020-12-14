import { Component, OnInit } from '@angular/core';
import { KorisnikService } from '../services/korisnik.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-licence',
  templateUrl: './licence.component.html',
  styleUrls: ['./licence.component.css']
})
export class LicenceComponent implements OnInit {

  public tipUlogovanog:string;

  public openNewLicenceForm = false;
  public newLicenceForm: FormGroup;

  public openClientCheckInForm = false;
  public clientCheckInForm: FormGroup;

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
      competitionDoc: [''],
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

  public clearCheckInForm(){
    this.clientCheckInForm.reset();
    this.openClientCheckInForm = false;
  }
  
}
