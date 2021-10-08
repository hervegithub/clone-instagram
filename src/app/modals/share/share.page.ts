import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share',
  templateUrl: './share.page.html',
  styleUrls: ['./share.page.scss'],
})
export class SharePage implements OnInit {

  profiles = ['assets/profile.jpg', 'assets/girl-02.jpg', 'assets/men-02.jpg', 'assets/girl-03.png', 'assets/men-01.jpg', 'assets/men-02.jpg'];

  constructor() { }

  ngOnInit() {
  }

}
