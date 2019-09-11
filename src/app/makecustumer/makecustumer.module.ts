import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MakecustumerRoutingModule } from './makecustumer-routing.module';
import { MakecustumerComponent } from './makecustumer.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from 'src/services/apiservice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [MakecustumerComponent],
  imports: [
    CommonModule,
    MakecustumerRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService]

})
export class MakecustumerModule { }
