import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatService {

  constructor(private httpClient: HttpClient) { }


  Url: string = "http://localhost:3100/disponibilite";

  getDispoService(): Observable<any>{
    return this.httpClient.get<any>(`${this.Url}/totalDispoService`);
  }

  getDispoMaint(): Observable<any>{
    return this.httpClient.get<any>(`${this.Url}/totalDispoMaint`);
  }

  getDispoPanne(): Observable<any>{
    return this.httpClient.get<any>(`${this.Url}/totalDispoPanne`);
  }

  ordreUrl: string = "http://localhost:3100/ordreStat";

  getDispoOuvert(): Observable<any>{
    return this.httpClient.get<any>(`${this.ordreUrl}/totalDispoOuvert`);
  }

  getDispoEnCours(): Observable<any>{
    return this.httpClient.get<any>(`${this.ordreUrl}/totalDispoEnCours`);
  }

  getDispoFerme(): Observable<any>{
    return this.httpClient.get<any>(`${this.ordreUrl}/totalDispoFerme`);
  }
}
