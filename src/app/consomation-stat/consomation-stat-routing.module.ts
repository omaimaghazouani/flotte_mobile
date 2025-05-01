import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsomationStatPage } from './consomation-stat.page';

const routes: Routes = [
  {
    path: '',
    component: ConsomationStatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsomationStatPageRoutingModule {}
