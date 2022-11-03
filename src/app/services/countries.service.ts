import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { CountryData } from '../models/country-data.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(
    private readonly http: HttpClient,
  ) {

  }

  getCountriesData(): Observable<CountryData[]> {
    return this.http.get('./assets/data.json').pipe(
      map((data: CountryData[]) => {
        return data;
      }),
      catchError(error => 
        of<CountryData[]>([])
      )
    );
  }
}
