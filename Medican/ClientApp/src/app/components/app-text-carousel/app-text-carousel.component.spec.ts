import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTextCarouselComponent } from './app-text-carousel.component';

describe('AppTextCarouselComponent', () => {
  let component: AppTextCarouselComponent;
  let fixture: ComponentFixture<AppTextCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTextCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTextCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
