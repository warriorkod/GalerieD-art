import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewcustomerRoutingModule } from './viewcustomer-routing.module';
import { ViewcustomerComponent } from './viewcustomer.component';
import { DataTablesModule } from 'angular-datatables';
import { ApiService } from 'src/services/apiservice.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ViewcustomerComponent],
  imports: [
    CommonModule,
    ViewcustomerRoutingModule,
    DataTablesModule,
    HttpClientModule

  ],
  providers: [ApiService]

})
export class ViewcustomerModule { }
