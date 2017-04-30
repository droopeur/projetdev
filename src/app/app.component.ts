import { Component } from '@angular/core';
import {User} from './_models/user';
import {AuthGuard} from './_guards/auth.guard';
import {Router, CanActivate} from '@angular/router';
import {UserService} from './_services/user.service';
import {HomeComponent} from './home/home.component'

@Component({
  selector: 'my-app',
  templateUrl : './app/app.component.html',


})

export class AppComponent  { name = 'Angular';
public user: User;
constructor(private userService: UserService,
  private router: Router) { }

  logout() {

    this.router.navigate(['/login']);
    location.reload();

  }


ngOnInit() {
    // get users from secure api end point
    this.userService.getUsers()
        .subscribe(users => {
            this.user = users[0];
        });
}

canActivate() {
    if (localStorage.getItem('currentUser')) {
        // logged in so return true
        return true;
    }

    // not logged in so redirect to login page
    else {
      return false
    }
}
    public isUserLoggedIn : boolean = this.canActivate();
logOut() {

}


 }
