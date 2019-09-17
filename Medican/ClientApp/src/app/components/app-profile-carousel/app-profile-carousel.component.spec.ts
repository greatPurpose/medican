import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProfileCarouselComponent } from './app-profile-carousel.component';

describe('AppProfileCarouselComponent', () => {
  let component: AppProfileCarouselComponent;
  let fixture: ComponentFixture<AppProfileCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppProfileCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppProfileCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
