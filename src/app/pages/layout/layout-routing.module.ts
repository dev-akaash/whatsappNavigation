import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutPage } from './layout.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutPage,
    children: [
       {
        path: 'list/:name',
        loadChildren: () => import('../detail/detail.module').then( m => m.DetailPageModule)
      },
      {
        path: '',
        loadChildren: () => import('../empty/empty.module').then( m => m.EmptyPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutPageRoutingModule {}
