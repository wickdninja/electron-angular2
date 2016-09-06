import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import { Page1Component } from './page1.component';
import { Page2Component } from './page2.component';

const appRoutes: Routes = [
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  
  // default route shows page 1
  { path: '**', component: Page1Component }
  
  // could also try this ranter than '**'?
  //{ path: '', redirectTo: 'page1', pathMatch: 'full' }
];

export const appRoutingProviders: any[] = [ ]; 

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);