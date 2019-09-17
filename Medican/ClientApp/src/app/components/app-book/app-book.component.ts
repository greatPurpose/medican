import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './app-book.component.html',
  styleUrls: ['./app-book.component.css']
})
export class AppBookComponent implements OnInit {
    select_item = -1;
    menuarr : string[];
    constructor() {
        this.menuarr = ['Search', 'Book appointment', 'Review service'];
    }

    ngOnInit() {
        
    }

}
