import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPatientComponent } from './app-patient.component';

describe('AppPatientComponent', () => {
  let component: AppPatientComponent;
  let fixture: ComponentFixture<AppPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
