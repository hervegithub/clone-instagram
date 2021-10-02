import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {CountriesPage} from '../modals/countries/countries.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private countriesModal: ModalController) { }

  async onShowModal(){
    const modal = await this.countriesModal.create({
      component: CountriesPage,
      cssClass: 'countries-class-cass'
    });
    return await modal.present();
  }

  ngOnInit() {
  }

}
