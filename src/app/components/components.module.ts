import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { TopTenComponent } from './top-ten/top-ten.component';
import { CountryFlagsComponent } from './country-flags/country-flags.component';



@NgModule({
  declarations: [
    HomeComponent,
    InfoComponent,
    TopTenComponent,
    CountryFlagsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class ComponentsModule { }
