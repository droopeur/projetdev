import {Injectable} from '@angular/core';
import {Http} from '@angular/http'
import {studiesList} from '../_models/studiesList' ;
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs';

@Injectable()

export class StudiesListService{
  constructor(private _http:Http){

  }
  getStudiesfromAPI(){
    return this._http.get('../CDN/studiesList.json')
        .do(x=> console.log())
        .map(studiesList => studiesList.json());
  }
}
