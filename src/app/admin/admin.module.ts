import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
// import { AngularMaterialModule } from '../angular-material.module';

import { environment } from '../../environments/environment';

@NgModule({
  declarations: [
    DashboardComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AdminRoutingModule,
    FormsModule,
    // AngularMaterialModule,
  ],
  providers: []
})
export class AdminModule { }
