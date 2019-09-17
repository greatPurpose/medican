import {Component} from '@angular/core';


@Component({
  selector: 'app-text-carousel',
  templateUrl: './app-text-carousel.component.html',
  styleUrls: ['./app-text-carousel.component.scss']
})
export class AppTextCarouselComponent {
  title = 'ngSlick';
 
 
  slides = [
    {txt: "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.", person: "John Doe, South Carolina"},
    {txt: "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.", person: "John Doe, South Carolina"},
    {txt: "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.", person: "John Doe, South Carolina"}
  ];
 
  slideConfig = {
      "slidesToShow": 1,
      "slidesToScroll": 1,
      "nextArrow": "<div class='owl-dot'></div>",
      "prevArrow": "<div class='owl-dot'></div>",
      "dots": true,
      "infinite": false
  };
    
  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }
 
 
}
