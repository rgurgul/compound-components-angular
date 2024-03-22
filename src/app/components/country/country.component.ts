import { Component, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { country } from 'src/app/services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent {
  selected$: Subject<string> = new Subject<string>();
  @Input() countries$!: Observable<country[]>;
  changed(value: any) {
    this.selected$.next(value);
  }
}
