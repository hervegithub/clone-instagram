import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 4.5,
    speed: 400,

  };

  // eslint-disable-next-line max-len
  profiles = ['assets/profile.jpg', 'assets/girl-02.jpg', 'assets/men-02.jpg', 'assets/girl-03.png', 'assets/men-01.jpg', 'assets/men-02.jpg'];
  constructor( private route: Router) { }

  onCommentPage(){
    this.route.navigateByUrl('comment');
  }

  ngOnInit() {
  }

}
