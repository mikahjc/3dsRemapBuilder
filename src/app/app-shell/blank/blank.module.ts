import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankComponent } from './blank.component';
import { BlankRoutingModule } from './blank-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonSelectorComponent } from '../button-selector/button-selector.component';
import { ButtonMapConfigurationComponent } from '../button-map-configuration/button-map-configuration.component'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BlankComponent,
    ButtonSelectorComponent,
    ButtonMapConfigurationComponent
  ],
  imports: [
    CommonModule,
    BlankRoutingModule,
    NgbModule,
    FormsModule
  ]
})
export class BlankModule { }
