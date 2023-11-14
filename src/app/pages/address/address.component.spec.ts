import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressComponent } from './address.component';

describe('AdressComponent', () => {
  let component: AdressComponent;
  let fixture: ComponentFixture<AdressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdressComponent]
    });
    fixture = TestBed.createComponent(AdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
