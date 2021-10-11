import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-options',
  templateUrl: './more-options.page.html',
  styleUrls: ['./more-options.page.scss'],
})
export class MoreOptionsPage implements OnInit{

  moreOptions = ['Signaler', 'Masquer', 'Copier le lien', 'Parteger sur ...', 'Se désabonner'];

  constructor() { }

  ngOnInit() {
  }

}
