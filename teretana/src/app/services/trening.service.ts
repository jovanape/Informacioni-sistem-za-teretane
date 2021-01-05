import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Korisnici } from '../model/korisnici.model';
import { Lokacija } from '../model/lokacija.model';
import { TrenerovTrening } from '../model/trenerov.trening.model';
import { Sala } from '../model/sala.model';

@Injectable({
  providedIn: 'root'
})
export class TreningService {
  
  private groupTrainingsUrl : string = "http://localhost:8081/group-trainings/";
  private locationUrl: string = "http://localhost:8081/location";

  constructor(private http:HttpClient) { }

  //vrati raspored treninga
  //Ne radi: CORS policy
  public getTrainingsForTrainer(trainerId:number) : Observable<TrenerovTrening[]>{
   return this.http.get<TrenerovTrening[]>(this.groupTrainingsUrl + trainerId);
  };

  //TODO: testirati 
  //"group-trainings/schedule/{trainerId}/{groupTrainingId}"

  public addNewTraining(trainerId: number, trainingId: number, data:TrenerovTrening){
    console.log("saljemo zahtev: " + this.groupTrainingsUrl + "schedule/" + trainerId + "/" + trainingId);
    return this.http.post<TrenerovTrening>(this.groupTrainingsUrl + "schedule/" + trainerId + "/" + trainingId, data);
  }

  //Ako sam dobro skapirala i update je post metod, dole su verzije sa patch i to za svaku stavku ponaosob
  //"group-trainings/update/{trainerId}/{groupTrainingId}"
  public updateTraining(trainerId:number, trainingId:number, data:TrenerovTrening){
    console.log("saljemo zahtev: " + this.groupTrainingsUrl + "update/" + trainerId + "/" + trainingId);
    return this.http.post<TrenerovTrening>(this.groupTrainingsUrl + "update/" + trainerId + "/" + trainingId, data);
  }

  public deleteTraining(trainerId:number, trainingId:number, data:TrenerovTrening){
    console.log("saljemo zahtev: " + this.groupTrainingsUrl + "remove/" + trainerId + "/" + trainingId);
    return this.http.post<TrenerovTrening>(this.groupTrainingsUrl + "remove/" + trainerId + "/" + trainingId, data);
  }

  //model i to []
  getRegistratedToTraining(trainingId: number):Observable<Korisnici[]>{
    return this.http.get<Korisnici[]>(this.groupTrainingsUrl + trainingId + "/all-registered-clients");
  }

  getLocations():Observable<Lokacija[]>{
    return this.http.get<Lokacija[]>(this.locationUrl);
  }

  getSala(locationId: number): Observable<Sala[]>{
    return this.http.get<Sala[]>(this.locationUrl + "/" + locationId);
  }

  

}


  //TODO: putanja za Patch i model
  // updateTrainingTime(trainingId: string, trainerId: string, data): Observable<any>{
  //   return this.http.patch<any>(this.groupTrainingsUrl+trainingId, data);
  // }

  //TODO: putanja za Patch i model
  //updateTrainingLocation(trainingId: string, trainerId:string, data): Observable<any>{
  //   return this.http.patch<any>(this.groupTrainingsUrl+trainingId, data);
  // }

  //TODO: putanja za Patch i model
  //updateTrainingCapacity(trainingId: string, trainerId:string, data): Observable<any>{
  //   return this.http.patch<any>(this.groupTrainingsUrl+trainingId, data);
  // }