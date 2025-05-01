import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderStatPageRoutingModule } from './order-stat-routing.module';

import { OrderStatPage } from './order-stat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderStatPageRoutingModule,
    OrderStatPage
  ],
  //declarations: [OrderStatPage]
})
export class OrderStatPageModule {}
