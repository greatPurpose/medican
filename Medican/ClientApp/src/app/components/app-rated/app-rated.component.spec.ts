import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRatedComponent } from './app-rated.component';

describe('AppRatedComponent', () => {
  let component: AppRatedComponent;
  let fixture: ComponentFixture<AppRatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppRatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
