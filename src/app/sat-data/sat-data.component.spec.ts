
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SatDataComponent } from './sat-data.component';

describe('SatDataComponent', () => {
  let component: SatDataComponent;
  let fixture: ComponentFixture<SatDataComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SatDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SatDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
