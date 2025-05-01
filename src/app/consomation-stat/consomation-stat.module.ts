import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsomationStatPageRoutingModule } from './consomation-stat-routing.module';

import { ConsomationStatPage } from './consomation-stat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsomationStatPageRoutingModule,
    ConsomationStatPage
  ],
  //declarations: [ConsomationStatPage]
})
export class ConsomationStatPageModule {}
