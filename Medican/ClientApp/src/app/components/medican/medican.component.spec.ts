import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicanComponent } from './medican.component';

describe('MedicanComponent', () => {
  let component: MedicanComponent;
  let fixture: ComponentFixture<MedicanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
