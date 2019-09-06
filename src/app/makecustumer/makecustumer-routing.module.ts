import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MakecustumerComponent } from './makecustumer.component';


const routes: Routes = [
  { path: '', component: MakecustumerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MakecustumerRoutingModule { }
