import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDishEditComponent } from './dashboard-dish-edit.component';

describe('DashboardDishEditComponent', () => {
  let component: DashboardDishEditComponent;
  let fixture: ComponentFixture<DashboardDishEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardDishEditComponent]
    });
    fixture = TestBed.createComponent(DashboardDishEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
