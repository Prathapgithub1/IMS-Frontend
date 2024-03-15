import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ChartModule } from 'primeng/chart';
@NgModule({
  declarations: [
    SidebarComponent,
    DashboardComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ChartModule
  ],
  exports:[
    SidebarComponent,
    DashboardComponent,
    HeaderComponent
  ]
})
export class DashboardModule { }
