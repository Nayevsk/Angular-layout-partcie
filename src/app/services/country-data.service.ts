import { Injectable } from '@angular/core';
import { countriesDb } from '../mockdata/countiresDb';
import { country} from '../mockdata/coutriesInterface';

@Injectable({
  providedIn: 'root'
})
export class CountryDataService {

  constructor() { }

  getCountries() : country[] {
    return countriesDb;
  } 
}
