import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {CountriesPage} from '../modals/countries/countries.page';
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private countriesModal: ModalController, private route: Router) { }

  async onShowModal(){
    const modal = await this.countriesModal.create({
      component: CountriesPage,
      cssClass: 'countries-class-cass'
    });
    return await modal.present();
  }

  onShowRegisterPage(){
    this.route.navigateByUrl('register-home');
  }

  onShowFindPage(){
    this.route.navigateByUrl('find');
  }

  ngOnInit() {
  }

}
