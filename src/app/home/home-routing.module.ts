import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

const homeRoutes: Routes = [
  { path: 'home', component: LayoutComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      homeRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule {}
