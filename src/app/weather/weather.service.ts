import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICurrentWeather } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

export interface IWeatherService {
  getCurrentWeather(city: string, country: string): Observable<ICurrentWeather>;
}



interface ICurrentWeatherData {
  weather: [{
    description: string;
    icon: string;
  }];
  main: {
    temp: number;
  };
  sys: {
    country: string;
  };
    dt: number;
    name: string;
}



@Injectable({
  providedIn: 'root'
})
export class WeatherService implements IWeatherService {

  getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
    // console.log(city);
    // console.log(country);

     return this.httpClient.get<ICurrentWeatherData>(
      `${environment.baseUrl}api.openweathermap.org/data/2.5/weather?` +       `q=${city},${country}&appid=${environment.appId}`
    ).pipe(map (data => this.transformToICurrentWeather(data)));
  }
  private transformToICurrentWeather(data: ICurrentWeatherData):ICurrentWeather {
    console.log(data.name);
    return {
      city: data.name,
      country: data.sys.country,
      date: data.dt * 1000,
      image: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      temperature: this.convertKelvinToFahrenheit(data.main.temp),
      description: data.weather[0].description
    };
  }

  private convertKelvinToFahrenheit(kelvin: number) {
    return kelvin * 9 / 5 - 459.67;
  }
  constructor(private httpClient: HttpClient) { }
}
