import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-home',
  templateUrl: './register-home.page.html',
  styleUrls: ['./register-home.page.scss'],
})
export class registerHomePage implements OnInit {

  constructor(private route: Router) { }

  onShowForm(){
    this.route.navigateByUrl('register-form');
  }


  ngOnInit() {
  }

}
