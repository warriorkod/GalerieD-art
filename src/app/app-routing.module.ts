import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren : () => import('./makecustumer/makecustumer.module').then(m => m.MakecustumerModule), 
  },
  { 
    path: 'makecustomer',
    loadChildren : () => import('./makecustumer/makecustumer.module').then(m => m.MakecustumerModule), 
  },
  {
    path: 'viewcustomer',
    loadChildren : () => import('./viewcustomer/viewcustomer.module').then(m => m.ViewcustomerModule), 
  },
  {
     path: '**', 
     redirectTo: '/makecustomer',
     pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
