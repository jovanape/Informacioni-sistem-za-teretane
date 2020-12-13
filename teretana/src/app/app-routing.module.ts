import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { Paket1Component } from './paket_1/paket_1.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'basicx12', component: Paket1Component },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// export const appRoutingModule = RouterModule.forRoot(routes);
