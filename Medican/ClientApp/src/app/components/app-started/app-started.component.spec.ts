import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppStartedComponent } from './app-started.component';

describe('AppStartedComponent', () => {
  let component: AppStartedComponent;
  let fixture: ComponentFixture<AppStartedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppStartedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
