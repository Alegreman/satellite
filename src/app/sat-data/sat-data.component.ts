import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { SatDataDataSource } from './sat-data-datasource';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sat-data',
  templateUrl: './sat-data.component.html',
  styleUrls: ['./sat-data.component.css']
})
export class SatDataComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: SatDataDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'satid',
    'satname',
    'launchDate',
    'satlat',
    'satlng',
    'satalt'
  ];
  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.dataSource = new SatDataDataSource(
      this.paginator,
      this.sort,
      this.dataService
    );
  }
}
