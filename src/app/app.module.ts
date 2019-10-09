import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SatDataComponent } from './sat-data/sat-data.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material';

import { HttpClientModule } from '@angular/common/http';

import { DataService } from './data.service';

@NgModule({
  declarations: [AppComponent, SatDataComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
