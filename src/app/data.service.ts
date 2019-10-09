import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SatDataItem } from './sat-data/sat-data-datasource';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {
    console.log('service works');
  }
  getPosition(): Observable<SatDataItem[]> {
    return this.http.get<SatDataItem[]>(
      'https://www.n2yo.com/rest/v1/satellite/above/49.57/-96.71/1228/10/22/&apiKey=R2CQLF-FTC39A-HFHR2W-33JE'
    );
  }
}
