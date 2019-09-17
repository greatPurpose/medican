import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBookComponent } from './app-book.component';

describe('AppBookComponent', () => {
  let component: AppBookComponent;
  let fixture: ComponentFixture<AppBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
