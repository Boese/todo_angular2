import { Component, OnInit } from '@angular/core';

import {NavBarComponent} from './nav-bar.component';

import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: 'app/home.component.html',
  styleUrls: ['app/home.component.css']
})

export class HomeComponent { 

  constructor(
      private _router: Router
  ) {
      
   }

}
