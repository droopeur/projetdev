import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent {


  constructor(
      private router: Router,
      ) { }


  logout() {

    this.router.navigate(['/login']);
    location.reload();

  }




}
