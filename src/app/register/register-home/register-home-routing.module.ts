import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { registerHomePage} from './register-home.page';

const routes: Routes = [
  {
    path: '',
    component: registerHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class registerHomeRoutingModule {}
