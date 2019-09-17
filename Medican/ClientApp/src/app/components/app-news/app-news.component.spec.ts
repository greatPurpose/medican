import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNewsComponent } from './app-news.component';

describe('AppNewsComponent', () => {
  let component: AppNewsComponent;
  let fixture: ComponentFixture<AppNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
