import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRoleMainComponent } from './dashboard-role-main.component';

describe('DashboardRoleMainComponent', () => {
  let component: DashboardRoleMainComponent;
  let fixture: ComponentFixture<DashboardRoleMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardRoleMainComponent]
    });
    fixture = TestBed.createComponent(DashboardRoleMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
