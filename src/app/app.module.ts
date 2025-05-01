import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePage } from './home/home.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ChartModule } from 'angular-highcharts';
import { VehiculeStatPage } from './vehicule-stat/vehicule-stat.page';
import { OrderStatPage } from './order-stat/order-stat.page';
import { ConsomationStatPage } from './consomation-stat/consomation-stat.page';


@NgModule({
  declarations: [AppComponent,
    
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    IonicModule,
    HttpClientModule,
    FooterComponent,
    MatIconModule,
    MatButtonModule,
    ChartModule,
    VehiculeStatPage,
    OrderStatPage,
    ConsomationStatPage
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
