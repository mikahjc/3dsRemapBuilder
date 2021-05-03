import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ButtonMapConfigurationComponent } from './button-map-configuration.component';

describe('ButtonMapConfigurationComponent', () => {
  let component: ButtonMapConfigurationComponent;
  let fixture: ComponentFixture<ButtonMapConfigurationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonMapConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonMapConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
