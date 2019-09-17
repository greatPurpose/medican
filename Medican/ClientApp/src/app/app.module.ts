// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SelectDropDownModule } from './models/ngx-select-dropdown.module';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { OAuthModule, OAuthStorage } from 'angular-oauth2-oidc';
import { ToastaModule } from 'ngx-toasta';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ChartsModule } from 'ng2-charts';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppErrorHandler } from './app-error.handler';
import { AppTitleService } from './services/app-title.service';
import { AppTranslationService, TranslateLanguageLoader } from './services/app-translation.service';
import { ConfigurationService } from './services/configuration.service';
import { LocalStoreManager } from './services/local-store-manager.service';


import { EqualValidator } from './directives/equal-validator.directive';
import { LastElementDirective } from './directives/last-element.directive';
import { AutofocusDirective } from './directives/autofocus.directive';
import { BootstrapTabDirective } from './directives/bootstrap-tab.directive';
import { BootstrapToggleDirective } from './directives/bootstrap-toggle.directive';
import { BootstrapSelectDirective } from './directives/bootstrap-select.directive';
import { BootstrapDatepickerDirective } from './directives/bootstrap-datepicker.directive';
import { GroupByPipe } from './pipes/group-by.pipe';

import { AppComponent } from './components/app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { MedicanComponent } from './components/medican/medican.component';
import { AppContentComponent } from './components/app-content/app-content.component';
import { AppFindComponent } from './components/app-find/app-find.component';
import { AppBookComponent } from './components/app-book/app-book.component';
import { AppStartedComponent } from './components/app-started/app-started.component';
import { AppRatedComponent } from './components/app-rated/app-rated.component';
import { AppPatientComponent } from './components/app-patient/app-patient.component';
import { AppNewsComponent } from './components/app-news/app-news.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { AppTextCarouselComponent } from './components/app-text-carousel/app-text-carousel.component';
import { AppProfileCarouselComponent } from './components/app-profile-carousel/app-profile-carousel.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    SelectDropDownModule,
    SlickCarouselModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: TranslateLanguageLoader
      }
    }),
    NgxDatatableModule,
    OAuthModule.forRoot(),
    ToastaModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    ChartsModule
  ],

  declarations: [
    AppComponent,
    NotFoundComponent,
    EqualValidator,
    LastElementDirective,
    AutofocusDirective,
    BootstrapTabDirective,
    BootstrapToggleDirective,
    BootstrapSelectDirective,
    BootstrapDatepickerDirective,
    GroupByPipe,
    MedicanComponent,
    AppContentComponent,
    AppFindComponent,
    AppBookComponent,
    AppStartedComponent,
    AppRatedComponent,
    AppPatientComponent,
    AppNewsComponent,
    AppFooterComponent,
    AppTextCarouselComponent,
    AppProfileCarouselComponent,
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler },    
    
    ConfigurationService,
    AppTitleService,
    AppTranslationService,    
    LocalStoreManager
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
