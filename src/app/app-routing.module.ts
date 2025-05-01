import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule),
    canActivate: [authGuard],
    data: { roles: ['chef de direction technique'] }

  },  {
    path: 'vehicule-stat',
    loadChildren: () => import('./vehicule-stat/vehicule-stat.module').then( m => m.VehiculeStatPageModule)
  },
  {
    path: 'order-stat',
    loadChildren: () => import('./order-stat/order-stat.module').then( m => m.OrderStatPageModule)
  },
  {
    path: 'consomation-stat',
    loadChildren: () => import('./consomation-stat/consomation-stat.module').then( m => m.ConsomationStatPageModule)
  },
  {
    path: 'aaa',
    loadChildren: () => import('./aaa/aaa.module').then( m => m.AaaPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
