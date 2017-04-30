import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {Olders} from './olders'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'

@Injectable ()

export class OldersService {
  constructor(private _http:Http) {

  }

  getOldersfromAPI(){
    return this._http.get('../CDN/olders.json')
        .do(x => console.log(x))
        .map(olders => olders.json());
  }
}
