import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  DataRepository,
  GenericDataRepository,
} from './data-repository/data.repository';

@NgModule({
  declarations: [AppComponent, ErrorPageComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [{ provide: DataRepository, useExisting: GenericDataRepository  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
