import { Component, OnInit } from '@angular/core';
import {country} from '../../mockdata/coutriesInterface';
import {CountryDataService} from '../../services/country-data.service'

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  
  countries: country[]  = []; 
  selectedCountry?: country;

  constructor(private CountryData:CountryDataService) { }

  getCountries(): void{
    this.CountryData.getCountries().subscribe( element => this.countries = element)
  }

  onSelect(element:country): void{
    this.selectedCountry = element
  }

  ngOnInit(): void {
    this.getCountries();
  }

}
