import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MakecustumerRoutingModule } from './makecustumer-routing.module';
import { MakecustumerComponent } from './makecustumer.component';
import { Bootstrap4FrameworkModule } from 'angular6-json-schema-form';
import { HttpClientModule } from '@angular/common/http';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';



@NgModule({
  declarations: [MakecustumerComponent],
  imports: [
    CommonModule,
    MakecustumerRoutingModule,
    Bootstrap4FrameworkModule,
    HttpClientModule,
    SharedmoduleModule

  ]
})
export class MakecustumerModule { }
