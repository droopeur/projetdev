import {Component} from '@angular/core'
import {StudiesListService} from '../_services/studieslist.service'
import {studiesList} from '../_models/studiesList';
import 'rxjs/Rx'

@Component({
  moduleId: module.id,
  selector: 'studiescomponent',
  templateUrl: 'studies.component.html',
  providers: [StudiesListService]

})


export class StudiesComponent {
  show: string = "";
  studieslist : studiesList;

  constructor(private _studiesListService : StudiesListService){

  }

  ngOnInit(){
    //this._studiesListService.getStudiesfromAPI()
    //    .suscribe( res=> this.studieslist =res,
    //                err => console.error(err.status)
//  );
  }
}
