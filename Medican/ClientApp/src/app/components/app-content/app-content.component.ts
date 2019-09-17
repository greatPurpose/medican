import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.scss']
})
export class AppContentComponent implements OnInit {

    singleSelect:any = [];
    
    config = {
        displayKey: "name", //if objects array passed which key to be displayed defaults to description
        search: true,
        placeholder: 'Category',
    };       

    options = [
        { "Id": 0, "name": "Genetic disorders" },
        { "Id": 1, "name": "Laboratory tests" },
        { "Id": 2, "name": "Nutrition disorders" },
        { "Id": 3, "name": "Consultation" },
        { "Id": 4, "name": "Intesive care" },
        { "Id": 5, "name": "Dental Implants" },
        { "Id": 6, "name": "Gynecologist" },
        { "Id": 7, "name": "Haematologist" },
        { "Id": 8, "name": "Neurologist" },
        { "Id": 9, "name": "Neurosurgeon" },        
    ];
    constructor() { }

  ngOnInit() {
  }

}
