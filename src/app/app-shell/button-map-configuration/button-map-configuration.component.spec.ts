import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonMapConfigurationComponent } from './button-map-configuration.component';

describe('ButtonMapConfigurationComponent', () => {
  let component: ButtonMapConfigurationComponent;
  let fixture: ComponentFixture<ButtonMapConfigurationComponent>;

  beforeEach(async(() => {
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
