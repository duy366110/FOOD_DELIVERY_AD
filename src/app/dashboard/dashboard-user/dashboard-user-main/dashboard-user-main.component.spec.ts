import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUserMainComponent } from './dashboard-user-main.component';

describe('DashboardUserMainComponent', () => {
  let component: DashboardUserMainComponent;
  let fixture: ComponentFixture<DashboardUserMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardUserMainComponent]
    });
    fixture = TestBed.createComponent(DashboardUserMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
