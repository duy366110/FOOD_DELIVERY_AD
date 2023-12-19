import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonSelectComponentComponent } from './common-select-component.component';

describe('CommonSelectComponentComponent', () => {
  let component: CommonSelectComponentComponent;
  let fixture: ComponentFixture<CommonSelectComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonSelectComponentComponent]
    });
    fixture = TestBed.createComponent(CommonSelectComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
