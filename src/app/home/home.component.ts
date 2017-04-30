import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/index';
import { UserService } from '../_services/user.service';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent {

public user : User

  constructor(
      private userService: UserService,
      private router: Router,
      ) { }

      ngOnInit() {
          // get users from secure api end point
          this.userService.getUsers()
              .subscribe(users => {
                  this.user = users[0];
              });
      }




}
