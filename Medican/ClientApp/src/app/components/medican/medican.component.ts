import { Component, OnInit } from '@angular/core';
import { AppContentComponent } from '../app-content/app-content.component';
import { AppFindComponent } from '../app-find/app-find.component';
import { AppBookComponent } from '../app-book/app-book.component';
import { AppStartedComponent } from '../app-started/app-started.component';
import { AppRatedComponent } from '../app-rated/app-rated.component';
import { AppPatientComponent } from '../app-patient/app-patient.component';
import { AppNewsComponent } from '../app-news/app-news.component';
import { AppFooterComponent } from '../app-footer/app-footer.component';

@Component({
  selector: 'app-medican',
  templateUrl: './medican.component.html',
  styleUrls: ['./medican.component.scss']
})
export class MedicanComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
