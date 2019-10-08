import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CirclePadConfigurationComponent } from './circle-pad-configuration.component';

describe('ButtonMapConfigurationComponent', () => {
  let component: CirclePadConfigurationComponent;
  let fixture: ComponentFixture<CirclePadConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CirclePadConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CirclePadConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
