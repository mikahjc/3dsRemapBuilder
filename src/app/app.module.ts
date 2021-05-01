import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BuilderConfigModule } from './app-shell/builder-config/builder-config.module';
import { NavBarComponent } from './app-shell/nav-bar/nav-bar.component';
import { FooterComponent } from './app-shell/footer/footer.component';
import { NgbButtonLabel } from '@ng-bootstrap/ng-bootstrap';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent
,  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BuilderConfigModule,
    QRCodeModule,
  ],
  providers: [NgbButtonLabel],
  bootstrap: [AppComponent]
})
export class AppModule { }
