import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {Clients} from './clients'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'

@Injectable ()

export class ClientsService {
  constructor(private _http:Http) {

  }

  getClientsfromAPI(){
    return this._http.get('../CDN/clients.json')
        .do(x => console.log(x))
        .map(clients => clients.json());
  }
}
