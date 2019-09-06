import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewcustomerComponent } from './viewcustomer.component';


const routes: Routes = [
  { path: '', component: ViewcustomerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewcustomerRoutingModule { }
