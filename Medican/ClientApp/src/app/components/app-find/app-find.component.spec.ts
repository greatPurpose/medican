import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFindComponent } from './app-find.component';

describe('AppFindComponent', () => {
  let component: AppFindComponent;
  let fixture: ComponentFixture<AppFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
