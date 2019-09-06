import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewcustomerRoutingModule } from './viewcustomer-routing.module';
import { ViewcustomerComponent } from './viewcustomer.component';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [ViewcustomerComponent],
  imports: [
    CommonModule,
    ViewcustomerRoutingModule,
    SharedmoduleModule,
    DataTablesModule,

  ]
})
export class ViewcustomerModule { }
