import { Component, Input } from '@angular/core';
import {NgClass} from '@angular/common';

import { Router } from '@angular/router';

@Component({
  selector: 'my-nav-bar',
  templateUrl: 'app/nav-bar.component.html',
  styleUrls: ['app/nav-bar.component.css'],
  providers: [],
  directives: []
})

export class NavBarComponent { 

  constructor(
    private _router: Router
  ) {
      
   }

   

}
