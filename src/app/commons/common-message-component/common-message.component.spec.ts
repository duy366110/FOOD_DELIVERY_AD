import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonMessageComponent } from './common-message.component';

describe('CommonMessageComponent', () => {
  let component: CommonMessageComponent;
  let fixture: ComponentFixture<CommonMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonMessageComponent]
    });
    fixture = TestBed.createComponent(CommonMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
