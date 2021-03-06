import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.page.html',
  styleUrls: ['./comment.page.scss'],
})
export class CommentPage implements OnInit {

  emojis =[
    {
      "id": 1467,
      "name": "baby bottle",
      "emoji": "πΌ",
      "unicode": "1F37C",
    },
    {
      "id": 113,
      "name": "baby",
      "emoji": "πΆ",
      "unicode": "1F476",
    },
    {
      "id": 114,
      "name": "baby: light skin tone",
      "emoji": "πΆπ»",
      "unicode": "1F476 1F3FB"
    },
    {
      "id": 115,
      "name": "baby: medium-light skin tone",
      "emoji": "πΆπΌ",
      "unicode": "1F476 1F3FC"
    },
    {
      "id": 116,
      "name": "baby: medium skin tone",
      "emoji": "πΆπ½",
      "unicode": "1F476 1F3FD"
    },
    {
      "id": 117,
      "name": "baby: medium-dark skin tone",
      "emoji": "πΆπΎ",
      "unicode": "1F476 1F3FE"
    },
    {
      "id": 118,
      "name": "baby: dark skin tone",
      "emoji": "πΆπΏ",
      "unicode": "1F476 1F3FF"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
