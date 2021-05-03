import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TouchscreenConfigurationComponent } from './touchscreen-configuration.component';

describe('ButtonMapConfigurationComponent', () => {
  let component: TouchscreenConfigurationComponent;
  let fixture: ComponentFixture<TouchscreenConfigurationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TouchscreenConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouchscreenConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
