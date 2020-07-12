import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandDialogComponent } from './band-dialog.component';

describe('BandDialogComponent', () => {
  let component: BandDialogComponent;
  let fixture: ComponentFixture<BandDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
