import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-carousel',
  templateUrl: './app-profile-carousel.component.html',
  styleUrls: ['./app-profile-carousel.component.scss']
})
export class AppProfileCarouselComponent{

  title = 'ngSlick';
 
 
  profiles = [
    {path: "assets/images/face/1.jpg",  picon:"assets/images/pin67.svg", address:"New York, 23331 Street", rate:"3.5"},
    {path: "assets/images/face/2.jpg",  picon:"assets/images/pin67.svg", address:"New York, 23331 Street", rate:"3.5"},
    {path: "assets/images/face/3.jpg",  picon:"assets/images/pin67.svg", address:"New York, 23331 Street", rate:"3.5"},
    {path: "assets/images/face/4.jpg",  picon:"assets/images/pin67.svg", address:"New York, 23331 Street", rate:"3.5"},
    {path: "assets/images/face/5.jpg",  picon:"assets/images/pin67.svg", address:"New York, 23331 Street", rate:"3.5"}
  ];
 
  slideConfig = {
    "slidesToShow": 3, 
    "slidesToScroll": 1,
    "prevArrow":'<div class="slick-prev-arrow"><i class="fa fa-chevron-left"></i></div>',
    "nextArrow":'<div class="slick-next-arrow"><i class="fa fa-chevron-right"></i></div>',
    "infinite":true,
    "arrows":true,
    "autoplay":true,
    "autoplaySpeed":10000,
    "responsive": [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } }
      ]
  };
  
  slickInit(e) {
  }
  
  breakpoint(e) {
  }
  
  afterChange(e) {
  
  }
  
  beforeChange(e) {
  }
}