import { Component, OnInit } from '@angular/core';
import {LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-find',
  templateUrl: './find.page.html',
  styleUrls: ['./find.page.scss'],
})
export class FindPage implements OnInit {

  constructor(private loader: LoadingController) { }

  async ngOnInit() {
    const load = await this.loader.create({
      cssClass: 'my-custom-class',
      message: 'Chargement ...',
      duration: 3000
    });

    load.present();
  }

}
