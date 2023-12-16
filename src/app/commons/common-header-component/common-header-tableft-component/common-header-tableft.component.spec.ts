import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonHeaderTableftComponent } from './common-header-tableft.component';

describe('CommonHeaderTableftComponent', () => {
  let component: CommonHeaderTableftComponent;
  let fixture: ComponentFixture<CommonHeaderTableftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonHeaderTableftComponent]
    });
    fixture = TestBed.createComponent(CommonHeaderTableftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
