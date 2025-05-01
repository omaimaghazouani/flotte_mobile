import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderStatPage } from './order-stat.page';

const routes: Routes = [
  {
    path: '',
    component: OrderStatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderStatPageRoutingModule {}
