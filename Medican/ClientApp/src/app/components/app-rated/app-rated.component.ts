import { Component,  HostListener, OnInit  } from '@angular/core';
import {AppProfileCarouselComponent} from '../app-profile-carousel/app-profile-carousel.component';
import { delay } from 'q';

@Component({
  selector: 'app-rated',
  templateUrl: './app-rated.component.html',
  styleUrls: ['./app-rated.component.css']
})



export class AppRatedComponent implements  OnInit {

  departments = ["Dentist", "Pediatric", "Oncology", "Family practice" ];
  constructor() { }

  showtabmenu = true;

  ngOnInit(){
    this.checksize();
  }


   @HostListener('window:resize', ['$event'])
   onResize(event) {
     this.checksize();
   }

   checksize() {
    if (window.innerWidth > 768) {
      this.showtabmenu = true;    
     } else {
       this.showtabmenu = false;
     }
   }
}
