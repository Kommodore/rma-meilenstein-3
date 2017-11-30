import { Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

declare let google;

@Injectable()
export class GmapProvider {

  map: any;
  drawPath: any;

  constructor() {
    console.log("Google Maps");
  }

  initMap(mapElement){
    this.map = new google.maps.Map(mapElement.nativeElement, {
      zoom: 14,
      center: {lat:  52.27, lng:  8.07}
    });
  }

  showPosition(position){
    this.map.panTo(position);
  }

  addPolyLines(coords){
    console.log(coords);
    this.drawPath = new google.maps.Polyline({
      path: coords,
      geodesic: true,
      strokeColor: '#ff00ff',
      strokeOpacity: 1.0,
      strokeWeigth: 2
    });
    this.drawPath.setMap(this.map);
  }

}
