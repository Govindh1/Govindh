import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminDataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {

    return this.http.get<any>('assets/current-value.json');
  }

  getCountryies(): Observable<any> {
    return this.http.get<any>('assets/hsn-country.json');
  }

}
