import { UploaderComponent } from './uploader/uploader.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QRCodeModule } from 'angularx-qrcode';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { TellerlistaComponent } from './tellerlista/tellerlista.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';

@NgModule({
   declarations: [
      AppComponent,
      TellerlistaComponent,
      UploaderComponent,
      TellerlistaComponent,
      DashboardComponent,
      ProductComponent
   ],
   imports: [
      BrowserModule,
	  AppRoutingModule,
	  FormsModule,
      QRCodeModule,
      ZXingScannerModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
