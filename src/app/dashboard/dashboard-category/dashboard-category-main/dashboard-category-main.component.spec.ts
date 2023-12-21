import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCategoryMainComponent } from './dashboard-category-main.component';

describe('DashboardCategoryMainComponent', () => {
  let component: DashboardCategoryMainComponent;
  let fixture: ComponentFixture<DashboardCategoryMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardCategoryMainComponent]
    });
    fixture = TestBed.createComponent(DashboardCategoryMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
