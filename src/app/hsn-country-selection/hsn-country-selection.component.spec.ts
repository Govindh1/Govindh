import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsnCountrySelectionComponent } from './hsn-country-selection.component';

describe('HsnCountrySelectionComponent', () => {
  let component: HsnCountrySelectionComponent;
  let fixture: ComponentFixture<HsnCountrySelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsnCountrySelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsnCountrySelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
