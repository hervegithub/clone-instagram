import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoreOptionsPage } from './more-options.page';

const routes: Routes = [
  {
    path: '',
    component: MoreOptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoreOptionsPageRoutingModule {}
