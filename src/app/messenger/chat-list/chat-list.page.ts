import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.page.html',
  styleUrls: ['./chat-list.page.scss'],
})
export class ChatListPage implements OnInit {

  chatList = [
    {
      photo: 'assets/girl-02.jpg',
      name: 'CristianoCR7',
      subname: 'Cristiano ronaldo',
    },
    {
      photo: 'assets/men-02.jpg',
      name: 'CristianoCR7',
      subname: 'Cristiano ronaldo',
     },
     {
      photo: 'assets/girl-03.png',
      name: 'CristianoCR7',
      subname: 'Cristiano ronaldo',
     }
  ];

  constructor(private route: Router) { }

  onShowChatPage(){
   this.route.navigateByUrl('chat');
  }

  ngOnInit() {
  }

}
