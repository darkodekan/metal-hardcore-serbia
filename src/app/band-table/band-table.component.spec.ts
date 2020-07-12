import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandTableComponent } from './band-table.component';

describe('BandTableComponent', () => {
  let component: BandTableComponent;
  let fixture: ComponentFixture<BandTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
