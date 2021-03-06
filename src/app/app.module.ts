import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {WeatherService} from './weather/weather.service';
import { HttpClientModule } from '@angular/common/http';
import 'hammerjs'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';

import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
