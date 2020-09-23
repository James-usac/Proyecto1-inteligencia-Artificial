import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { Animalesdto } from '../models/Animalesdto'
import { Listadto } from '../models/Listadto'


@Injectable({
  providedIn: 'root'
})
export class AnimalesSerService {

  myAppUrl = 'http://127.0.0.1:3000/'
  myApiUrl = 'animales/'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getListAnimales(id): Observable<Listadto> {
    // now returns an Observable of Config
    return this.http.get<Listadto>(this.myAppUrl + this.myApiUrl + '/'+id);
  }
  guardaranimales(comentario: any): Observable<any>{
    return this.http.post<any>(this.myAppUrl + this.myApiUrl, comentario, this.httpOptions);
  }

  constructor(private http: HttpClient ) { }

}
