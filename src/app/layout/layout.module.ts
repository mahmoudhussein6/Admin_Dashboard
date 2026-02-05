import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';

// Layout Components


@NgModule({
  declarations: [
    //LayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SidebarComponent,
    NavbarComponent,
    LayoutComponent
  ],
  exports: [
    LayoutComponent,  // تقدر تستخدم LayoutComponent برا
    SidebarComponent, // تقدر تستخدم SidebarComponent برا
    NavbarComponent   // تقدر تستخدم NavbarComponent برا
  ]
})
export class LayoutModule { }
