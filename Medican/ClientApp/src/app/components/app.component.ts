// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

import { Component, ViewEncapsulation, OnInit, OnDestroy, ViewChildren, AfterViewInit, QueryList, ElementRef } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { ToastaService, ToastaConfig, ToastOptions, ToastData } from 'ngx-toasta';

import { AppTranslationService } from '../services/app-translation.service';
import { LocalStoreManager } from '../services/local-store-manager.service';
import { AppTitleService } from '../services/app-title.service';
import { ConfigurationService } from '../services/configuration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  isAppLoaded: boolean;
  isUserLoggedIn: boolean;
  shouldShowLoginModal: boolean;
  removePrebootScreen: boolean;
  newNotificationCount = 0;
  appTitle = 'Medican';
  appLogo = require('../assets/images/logo-white.png');

  stickyToasties: number[] = [];

  dataLoadingConsecutiveFailures = 0;
  modalLoginControls: QueryList<any>;


  gT = (key: string | Array<string>, interpolateParams?: Object) => this.translationService.getTranslation(key, interpolateParams);

  get notificationsTitle() {
    if (this.newNotificationCount) {
      return `${this.gT('app.Notifications')} (${this.newNotificationCount} ${this.gT('app.New')})`;
    } else {
      return this.gT('app.Notifications');
    }
  }


  constructor(
    storageManager: LocalStoreManager,
    private toastaService: ToastaService,
    private toastaConfig: ToastaConfig,
    private appTitleService: AppTitleService,
    private translationService: AppTranslationService,
    public configurations: ConfigurationService,
    public router: Router) {

    storageManager.initialiseStorageSyncListener();

    this.toastaConfig.theme = 'bootstrap';
    this.toastaConfig.position = 'top-right';
    this.toastaConfig.limit = 100;
    this.toastaConfig.showClose = true;
    this.toastaConfig.showDuration = false;

    this.appTitleService.appName = this.appTitle;
  }


  ngAfterViewInit() {
   }


  ngOnInit() {
  }


  ngOnDestroy() {
  }
}
