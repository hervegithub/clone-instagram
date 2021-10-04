import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './register-form.page.html',
  styleUrls: ['./register-form.page.scss'],
})
export class RegisterFormPage implements OnInit {

  formType: string = 'phone';

  constructor() { }

  ngOnInit() {
  }

}
