import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { Animalesdto } from '../models/Animalesdto'


@Injectable({
  providedIn: 'root'
})
export class AnimalesSerService {

  myAppUrl = 'http://127.0.0.1:3000/'
  myApiUrl = 'animales/'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    })
  }  

  guardaranimales(comentario: any): Observable<any>{
    return this.http.post<any>(this.myAppUrl + this.myApiUrl, comentario, this.httpOptions);
  }

  constructor(private http: HttpClient ) { }

}
