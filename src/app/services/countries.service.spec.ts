import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CountryData } from '../models/country-data.model';

import { CountriesService } from './countries.service';

describe('CountriesService', () => {
  let httpTestingController: HttpTestingController;
  let service: CountriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClientModule]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(CountriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getCountriesData should use GET to retrieve data', () => {
    service.getCountriesData().subscribe(); 
    const testRequest = httpTestingController.expectOne('./assets/data.json'); 
    expect(testRequest.request.method).toEqual('GET');
  });

  it('getCountriesData return an array of data', (done: DoneFn) => {

    const countries: CountryData[] = [{
      entitled: true,
      dataAvailable: true,
      score: 6.66666666666,
      selected: false
    }];

    service.getCountriesData().subscribe((getCountriesDataResponse: CountryData[]) => {
      expect(getCountriesDataResponse.length).toBeGreaterThan(0);
      expect(getCountriesDataResponse).toEqual(countries);
      done();
    });

    const testRequest = httpTestingController.expectOne('./assets/data.json');
    testRequest.flush(countries);
  });

  it('getCountriesData should return empty array on error', (done: DoneFn) => {
    const expectedData: CountryData[] = []
 
    service.getCountriesData().subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });
 
    const testRequest = httpTestingController.expectOne('./assets/data.json'); 
    testRequest.flush('error', { status: 404, statusText: 'Data not found' });
  });
});
