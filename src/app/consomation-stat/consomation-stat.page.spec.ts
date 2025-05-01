import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsomationStatPage } from './consomation-stat.page';

describe('ConsomationStatPage', () => {
  let component: ConsomationStatPage;
  let fixture: ComponentFixture<ConsomationStatPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsomationStatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
