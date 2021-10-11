import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoreOptionsPageRoutingModule } from './more-options-routing.module';

import { MoreOptionsPage } from './more-options.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoreOptionsPageRoutingModule
  ],
  declarations: [MoreOptionsPage]
})
export class MoreOptionsPageModule {}
