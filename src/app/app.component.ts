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
  //Déclaration d'un tableau weather
  weather :any[]=[]
  //Date d'aujourd'hui
  d = new Date();
  date = this.d.getFullYear()+'-'+(this.d.getMonth()+1)+'-'+this.d.getDate();
  //Heure d'aujourd'hui
  hours = this.d.getHours() + ":" + this.d.getMinutes();



  constructor(private weatherService : WeatherService){

  }

  ngOnInit(){ 
   this.weatherService.getWeather().subscribe(r =>{
     this.weather.push(r)
      console.log(r)
    })
  }

}
