import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuilderConfigComponent } from './builder-config.component';
import { BuilderConfigRoutingModule } from './builder-config-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonSelectorComponent } from '../button-selector/button-selector.component';
import { ButtonMapConfigurationComponent } from '../button-map-configuration/button-map-configuration.component'
import { FormsModule } from '@angular/forms';
import {TouchscreenConfigurationComponent} from '../touch-screen-configuration/touchscreen-configuration.component';


@NgModule({
  declarations: [
    BuilderConfigComponent,
    ButtonSelectorComponent,
    ButtonMapConfigurationComponent,
    TouchscreenConfigurationComponent
  ],
  imports: [
    CommonModule,
    BuilderConfigRoutingModule,
    NgbModule,
    FormsModule
  ]
})
export class BuilderConfigModule { }
