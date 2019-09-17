// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

import { NgModule } from '@angular/core';
import { Routes, RouterModule, DefaultUrlSerializer, UrlSerializer, UrlTree } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { MedicanComponent } from './components/medican/medican.component';
import { Utilities } from './services/utilities';



export class LowerCaseUrlSerializer extends DefaultUrlSerializer {
  parse(url: string): UrlTree {
    const possibleSeparators = /[?;#]/;
    const indexOfSeparator = url.search(possibleSeparators);
    let processedUrl: string;

    if (indexOfSeparator > -1) {
      const separator = url.charAt(indexOfSeparator);
      const urlParts = Utilities.splitInTwo(url, separator);
      urlParts.firstPart = urlParts.firstPart.toLowerCase();

      processedUrl = urlParts.firstPart + separator + urlParts.secondPart;
    } else {
      processedUrl = url.toLowerCase();
    }

    return super.parse(processedUrl);
  }
}


const routes: Routes = [
    { path: '', component: MedicanComponent, data: { title: 'Medican' } },
    { path: 'medican', redirectTo: '/', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent, data: { title: 'Page Not Found' } }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [    
    { provide: UrlSerializer, useClass: LowerCaseUrlSerializer }]
})
export class AppRoutingModule { }
