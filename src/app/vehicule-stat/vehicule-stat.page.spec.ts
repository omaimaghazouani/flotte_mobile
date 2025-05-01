import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehiculeStatPage } from './vehicule-stat.page';

describe('VehiculeStatPage', () => {
  let component: VehiculeStatPage;
  let fixture: ComponentFixture<VehiculeStatPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculeStatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
