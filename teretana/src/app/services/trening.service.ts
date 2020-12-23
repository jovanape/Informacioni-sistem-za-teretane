import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreningService {

  private groupTrainingsUrl : string = "http://localhost:8081/training/group-trainings/";
  private locationUrl: string = "http://localhost:8081/location/";

  constructor(private http:HttpClient) { }

  //TODO: model i to []
  public getTrainingsForTrainer(trainerId:string) : Observable<any>{
   return this.http.get<any>(this.groupTrainingsUrl + trainerId);
  };

  //TODO: model + testirati da li id kao string ili kao integer
  //"group-trainings/schedule/{trainerId}/{groupTrainingId}"

  public addNewTraining(trainerId: string, trainingId: string, data:any){
    return this.http.post<any>(this.groupTrainingsUrl + "schedule/" + trainerId + "/" + trainingId, data);
  }

  //Ako sam dobro skapirala i update je post metod, dole su verzije sa patch i to za svaku stavku ponaosob
  //"group-trainings/update/{trainerId}/{groupTrainingId}"
  public updateTraining(trainerId:string, trainingId:string, data:any){
    return this.http.post<any>(this.groupTrainingsUrl + "update/" + trainerId + "/" + trainingId, data);
  }


  //model i to []
  getRegistratedToTraining(trainingId: string):Observable<any>{
    return this.http.get<any>(this.groupTrainingsUrl + trainingId + "/all-registrated-clients");
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