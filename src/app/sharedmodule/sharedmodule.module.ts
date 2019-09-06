import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
];
@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent,RouterModule],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SharedmoduleModule { }
