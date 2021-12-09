import { Observable } from 'rxjs';
import { WeatherService } from './service/weather.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'openWeather';
  weather :any[]=[]

  constructor(private weatherService : WeatherService){

  }

  ngOnInit(){ 
   this.weatherService.getWeather().subscribe(r =>{
     this.weather.push(r)
      console.log(r)
    })
  }

  showWeather(){
    
  }
}
