import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDishComponent } from './dashboard-dish.component';

describe('DashboardDishComponent', () => {
  let component: DashboardDishComponent;
  let fixture: ComponentFixture<DashboardDishComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardDishComponent]
    });
    fixture = TestBed.createComponent(DashboardDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
