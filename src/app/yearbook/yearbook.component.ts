import {Component, OnInit} from '@angular/core'
import {ClientsService} from './clients.service'
import {Clients} from './clients'
import {Olders} from './olders'
import {OldersService} from './olders.service'
import {Members} from './members'
import {MembersService} from './members.service'
import 'rxjs/Rx'

@Component({
  moduleId: module.id,
  selector: 'yearbook',
  templateUrl: 'yearbook.component.html',

})

export class YearbookComponent implements OnInit {
  show: string = "";
  clients : Clients;
  olders : Olders;
  members : Members;

  constructor(private _clientsService : ClientsService, private _membersService : MembersService, private _oldersService : OldersService ){

  }


  ngOnInit() {
    this._clientsService.getClientsfromAPI()
        .subscribe( res => this.clients = res,
             err => console.error(err.status)
           );
    this._oldersService.getOldersfromAPI()
        .subscribe( res => this.olders = res,
              err => console.error(err.status)
            );
    this._membersService.getMembersfromAPI()
        .subscribe( res => this.members = res,
              err => console.error(err.status)
            );


  }
}
