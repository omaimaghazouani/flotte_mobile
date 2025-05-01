import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehiculeStatPage } from './vehicule-stat.page';

const routes: Routes = [
  {
    path: '',
    component: VehiculeStatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehiculeStatPageRoutingModule {}
