import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [
    CommonModule,

    HomeRoutingModule
  ],
  declarations: [LayoutComponent]
})
export class HomeModule { }
