import {NgModule} from '@angular/core'
import{CommonModule} from '@angular/common';
import{StudiesComponent} from './studies.component'

@NgModule({
  imports: [CommonModule],
  declarations: [StudiesComponent],
  exports: [StudiesComponent],
})

export class StudiesModule {}
