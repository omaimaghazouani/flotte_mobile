import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderStatPage } from './order-stat.page';

describe('OrderStatPage', () => {
  let component: OrderStatPage;
  let fixture: ComponentFixture<OrderStatPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderStatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
