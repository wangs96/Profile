import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LayoutComponent],
  declarations: [LayoutComponent, NavigationComponent]
})
export class CoreModule { }
