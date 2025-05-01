import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AaaPage } from './aaa.page';

describe('AaaPage', () => {
  let component: AaaPage;
  let fixture: ComponentFixture<AaaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AaaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
