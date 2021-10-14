import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  message  = '';

  constructor() { }

  onInputFocusing(ev){
    console.log(ev);
  }

  ngOnInit() {
  }

}
