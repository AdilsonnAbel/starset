import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarsetToolbarComponent } from './starset-toolbar/starset-toolbar.component';
import { StarsetNavbarComponent } from './starset-navbar/starset-navbar.component';
import { StarsetContentComponent } from './starset-content/starset-content.component';

@NgModule({
  declarations: [
    AppComponent,
    StarsetToolbarComponent,
    StarsetNavbarComponent,
    StarsetContentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
