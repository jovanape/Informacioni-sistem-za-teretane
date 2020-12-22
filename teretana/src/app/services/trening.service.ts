import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreningService {

  private groupTrainingsUrl : string = "http://localhost:8081/training/group-trainings/";
  private locationUrl: string = "http://localhost:8081/location/";

  //TODO: Ucicati HttpClient u angular file
  // constructor(private http:HttpClient) { }

  //TODO: model i to []
  // public getTrainingsForTrainer(trainerId:string) : Observable<any>{
  //  return this.http.get<any>(this.groupTrainingsUrl + trainerId);
  // };

  //TODO: model
  // public addNewTraining(data){
  //   return this.http.post<any>(this.groupTrainingsUrl, data);
  // }

  //TODO: putanja za Patch i model
  // updateTrainingTime(trainingId: string, data): Observable<any>{
  //   return this.http.patch<any>(this.groupTrainingsUrl+trainingId, data);
  // }

  //TODO: putanja za Patch i model
  //updateTrainingLocation(trainingId: string, data): Observable<any>{
  //   return this.http.patch<any>(this.groupTrainingsUrl+trainingId, data);
  // }

  //TODO: putanja za Patch i model
  //updateTrainingCapacity(trainingId: string, data): Observable<any>{
  //   return this.http.patch<any>(this.groupTrainingsUrl+trainingId, data);
  // }

  //model i to [], putanja
  //getSubscribedToTraining(trainingId: string):Observable<any>{
  //   return this.http.get<any>(this.groupTrainingsUrl+trainingId);
  // }
}
