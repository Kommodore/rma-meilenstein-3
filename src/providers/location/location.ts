import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import 'rxjs/add/operator/map';

@Injectable()
export class LocationProvider {

  duration: any = 3000;
  inter: any;

  constructor(public geolocation: Geolocation) {
    console.log("Locations");
  }

  startRecoding(){
    this.inter = setInterval(function(){
      this.geolocation.getCurrentPosition().then(pos =>{
          console.log('lat: ' + pos.coords.latitude + ', lng: ' + pos.coords.longitude);
      });
    }, this.duration);
  }

  stopRecording(){
    clearInterval(this.inter);
  }

}
