import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  slideOpts = {
    initialSlide: 1,
    slidesPerView: 4.5,
    speed: 400,

  };

  profiles = ['1', '2', '3', '4', '5', '6', '7', '8'];
  constructor() { }

  ngOnInit() {
  }

}
