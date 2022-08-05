import { Injectable } from '@angular/core';
// import { countriesDb } from '../mockdata/countiresDb'; NOT USING MOCK DB ANYMORE
import { country} from '../mockdata/coutriesInterface';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryDataService {

private countriesDbUrl = 'http://localhost:5000/countriesDb';

  constructor(private http: HttpClient) { }

  getCountries() : Observable<country[]> {
    return this.http.get<country[]>(this.countriesDbUrl)
  } 
}
