import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminSideComponent } from './admin-side/admin-side.component';
import { HsnCountrySelectionComponent } from './hsn-country-selection/hsn-country-selection.component';


const routes: Routes = [
  {
    path: 'admin-side',
    component: AdminSideComponent
  },
  {
    path: 'hsn-country',
    component: HsnCountrySelectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
