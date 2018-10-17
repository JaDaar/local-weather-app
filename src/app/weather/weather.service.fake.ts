import { Observable, of } from 'rxjs';
import { IWeatherService } from '../weather/weather.service';
import { ICurrentWeather } from '../interfaces/interfaces';

export class WeatherServiceFake implements IWeatherService {
    private fakeWeather: ICurrentWeather = {
        city: 'Bursa',
        country: 'TR',
        date: 1385789600,
        image: '',
        temperature: 280.32,
        description: 'light intensity drizzle'
    };

    public getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
        return of(this.fakeWeather);
    }
}