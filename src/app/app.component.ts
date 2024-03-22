import { Component } from '@angular/core';
import { CountryService } from './services/country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'compound-components-angular';
  countries$ = this.countryService.getCountries();
  constructor(private countryService: CountryService) { }
}
