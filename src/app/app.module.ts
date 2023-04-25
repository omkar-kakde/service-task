import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasengerDashboardComponent } from './shared/component/pasenger-dashboard/pasenger-dashboard.component';
import { PassCountComponent } from './shared/component/pass-count/pass-count.component';
import { PassCardComponent } from './shared/component/pass-card/pass-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PasengerDashboardComponent,
    PassCountComponent,
    PassCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
