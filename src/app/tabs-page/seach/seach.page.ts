import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seach',
  templateUrl: './seach.page.html',
  styleUrls: ['./seach.page.scss'],
})
export class SeachPage implements OnInit {

  profiles = ['assets/profile.jpg', 'assets/girl-02.jpg', 'assets/men-02.jpg', 'assets/girl-03.png', 'assets/men-01.jpg', 'assets/men-02.jpg'];

  constructor() { }

  ngOnInit() {
  }

}
