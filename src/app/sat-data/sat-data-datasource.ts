import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { DataService } from '../data.service';

// TODO: Replace this with your own data model type
export interface SatDataItem {
  satname: string;
  satid: number;
  launchDate: string;
  satlat: number;
  satlng: number;
  satalt: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: SatDataItem[] = [];

/**
 * Data source for the SatData view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */

export class SatDataDataSource extends DataSource<SatDataItem> {
  data: SatDataItem[] = EXAMPLE_DATA;
  constructor(
    private paginator: MatPaginator,
    private sort: MatSort,
    private dataService: DataService
  ) {
    super();
    this.dataService.getPosition().subscribe(res => {
      this.data = res;
      //console.log(res.above);
    });
  }
  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<SatDataItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginators length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(
      map(() => {
        return this.getPagedData(this.getSortedData([...this.data]));
      })
    );
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: SatDataItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: SatDataItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'satname':
          return compare(a.satname, b.satname, isAsc);
        case 'launchDate':
          return compare(a.launchDate, b.launchDate, isAsc);
        case 'satlat':
          return compare(+a.satlat, +b.satlat, isAsc);
        case 'satlng':
          return compare(+a.satlng, +b.satlng, isAsc);
        case 'satalt':
          return compare(+a.satalt, +b.satalt, isAsc);
        case 'satid':
          return compare(+a.satid, +b.satid, isAsc);
        default:
          return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
