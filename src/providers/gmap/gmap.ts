import { Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

declare let google;

@Injectable()
export class GmapProvider {

  map: any;

  constructor() {
    console.log("Google Maps");
  }

  initMap(mapElement){
    this.map = new google.maps.Map(mapElement.nativeElement, {
      zoom: 10,
      center: {lat:  52.27, lng:  8.07}
    });
  }

  showPosition(position){
    this.map.panTo(position);
  }

}
