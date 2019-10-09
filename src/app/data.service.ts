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
      'https://www.n2yo.com/rest/v1/satellite/above/41.702/-76.014/0/70/18//&apiKey=R2CQLF-FTC39A-HFHR2W-33JE'
    );
  }
}
// 'https://www.n2yo.com/rest/v1/satellite/positions/25544/41.702/-76.014/0/2/&apiKey=R2CQLF-FTC39A-HFHR2W-33JE'
