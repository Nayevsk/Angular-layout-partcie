import { Component, OnInit } from '@angular/core';
import {countriesDb} from '../../mockdata/countiresDb';
import {country} from '../../mockdata/coutriesInterface';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  countries = countriesDb
  selectedCountry?: country;

  constructor() { }

  onSelect(element:country): void{
    this.selectedCountry = element
  }

  ngOnInit(): void {
  }

}
