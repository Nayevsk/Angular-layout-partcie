import { Injectable } from '@angular/core';
import { countriesDb } from '../mockdata/countiresDb';
import { country} from '../mockdata/coutriesInterface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryDataService {

  constructor() { }

  getCountries() : Observable<country[]> {
    const countries = of(countriesDb)
    return countries;
  } 
}
