import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDishNewComponent } from './dashboard-dish-new.component';

describe('DashboardDishNewComponent', () => {
  let component: DashboardDishNewComponent;
  let fixture: ComponentFixture<DashboardDishNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardDishNewComponent]
    });
    fixture = TestBed.createComponent(DashboardDishNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
