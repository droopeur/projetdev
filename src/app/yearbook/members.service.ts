import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {Members} from './members'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/Rx'
@Injectable ()

export class MembersService {
  constructor(private _http:Http) {

  }

  getMembersfromAPI(){
    return this._http.get('../CDN/members.json')
        .do(x => console.log(x))
        .map(members => members.json());
  }
}
