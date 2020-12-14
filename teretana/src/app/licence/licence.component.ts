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

  public addNewLicence = false;
  public newLicenceForm: FormGroup;

  constructor(private korisnikService: KorisnikService,
              private formBuilder: FormBuilder) {
    this.tipUlogovanog = korisnikService.tipUlogovanog;

    this.newLicenceForm = this.formBuilder.group({
      type: ['', [Validators.required]],
      trainers: ['', [Validators.required]],
      location: ['', [Validators.required]],
      conditions: ['', [Validators.required]],
      requiredDocuments: ['', [Validators.required]],
      courseStart: ['', [Validators.required]],
      courseEnd: ['', [Validators.required]],
      commissionMembers: ['', [Validators.required]],
      examDate: ['', [Validators.required]],
      examTimeStart: ['', [Validators.required]],
      examTimeFinish: ['', [Validators.required]],
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
    this.addNewLicence = true;
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
  }

  public clearForm(){
    this.newLicenceForm.reset();
  }
}
