import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
})
export class CountriesPage implements OnInit {

  countries = [
    {
      name : 'Africaner',
      descripton: ''
    },
    {
      name : 'Français',
      descripton: ''
    },
    {
      name : 'Anglais',
      descripton: ''
    },
    {
      name : 'Allemand',
      descripton: ''
    },
    {
      name : 'Africaner',
      descripton: ''
    },
    {
      name : 'Français',
      descripton: ''
    },
    {
      name : 'Anglais',
      descripton: ''
    },
    {
      name : 'Allemand',
      descripton: ''
    },{
      name : 'Africaner',
      descripton: ''
    },
    {
      name : 'Français',
      descripton: ''
    },
    {
      name : 'Anglais',
      descripton: ''
    },
    {
      name : 'Allemand',
      descripton: ''
    },{
      name : 'Africaner',
      descripton: ''
    },
    {
      name : 'Français',
      descripton: ''
    },
    {
      name : 'Anglais',
      descripton: ''
    },
    {
      name : 'Allemand',
      descripton: ''
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
