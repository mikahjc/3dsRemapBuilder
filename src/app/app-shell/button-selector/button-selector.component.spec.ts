import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ButtonSelectorComponent } from './button-selector.component';

describe('ButtonSelectorComponent', () => {
  let component: ButtonSelectorComponent;
  let fixture: ComponentFixture<ButtonSelectorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
