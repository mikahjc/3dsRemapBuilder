import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CirclePadConfigurationComponent } from './circle-pad-configuration.component';

describe('ButtonMapConfigurationComponent', () => {
  let component: CirclePadConfigurationComponent;
  let fixture: ComponentFixture<CirclePadConfigurationComponent>;

  beforeEach(waitForAsync(() => {
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
