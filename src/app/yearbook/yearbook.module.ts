import {NgModule} from '@angular/core';
import{CommonModule} from '@angular/common';
import {YearbookComponent} from './yearbook.component';
import {ClientsService} from './clients.service'
import {HttpModule} from '@angular/http'
import {OldersService} from './olders.service'
import {MembersService} from './members.service'
@NgModule({

  imports : [CommonModule, HttpModule],
  declarations: [YearbookComponent],
  exports: [YearbookComponent],
  providers: [ ClientsService, OldersService, MembersService ]
})

export class YearbookModule {

}
