import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { registerHomeRoutingModule} from './register-home-routing.module';

import { registerHomePage } from './register-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    registerHomeRoutingModule
  ],
  declarations: [registerHomePage]
})
export class registerHomeModule {}
