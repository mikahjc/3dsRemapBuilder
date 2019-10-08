import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderConfigComponent } from './builder-config.component';

describe('BlankComponent', () => {
  let component: BuilderConfigComponent;
  let fixture: ComponentFixture<BuilderConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BuilderConfigComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuilderConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
