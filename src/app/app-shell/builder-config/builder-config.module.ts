import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuilderConfigComponent } from './builder-config.component';
import { BuilderConfigRoutingModule } from './builder-config-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonSelectorComponent } from '../button-selector/button-selector.component';
import { ButtonMapConfigurationComponent } from '../button-map-configuration/button-map-configuration.component'
import { FormsModule } from '@angular/forms';
import {TouchscreenConfigurationComponent} from '../touch-screen-configuration/touchscreen-configuration.component';
import {CirclePadConfigurationComponent} from '../circle-pad-configuration/circle-pad-configuration.component';
import { QRCodeModule } from 'angularx-qrcode'
import { TouchscreenConfigurationComponentV2 } from '../touch-screen-configuration-v2/touchscreen-configuration.component';


@NgModule({
  declarations: [
    BuilderConfigComponent,
    ButtonSelectorComponent,
    ButtonMapConfigurationComponent,
    TouchscreenConfigurationComponent,
    TouchscreenConfigurationComponentV2,
    CirclePadConfigurationComponent
  ],
  imports: [
    CommonModule,
    BuilderConfigRoutingModule,
    NgbModule,
    FormsModule,
    QRCodeModule,
  ]
})
export class BuilderConfigModule { }
