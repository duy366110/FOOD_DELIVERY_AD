import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDishMainComponent } from './dashboard-dish-main.component';

describe('DashboardDishMainComponent', () => {
  let component: DashboardDishMainComponent;
  let fixture: ComponentFixture<DashboardDishMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardDishMainComponent]
    });
    fixture = TestBed.createComponent(DashboardDishMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
