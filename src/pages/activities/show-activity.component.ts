import {Component, ElementRef, ViewChild} from "@angular/core";
import {NavParams, NavController} from "ionic-angular";
import {LocalStorageProvider} from "../../providers/local-storage/local-storage";
import {GmapProvider} from "../../providers/gmap/gmap";

@Component({
    templateUrl: 'show-activity.html'
})
export class ShowActivityComponent {
    activityId: number;
    type: string = "";
    time: string = "";
    duration: number = 0;
    coords: any = [];

    @ViewChild('map') mapElement: ElementRef;

    constructor(public navCtrl: NavController, public storage: LocalStorageProvider, public params: NavParams, public gmap:GmapProvider) {
        this.gmap.initMap(this.mapElement);
        setTimeout(() => {
            console.log("Im Timeout");
        }, 5000);
        this.showActivity();
    }

    ionViewWillEnter(){
        //this.gmap.initMap(this.mapElement);
        console.log("da");
    }

    showActivity() {
        this.activityId = this.params.get("activityId");
        let acticity: any = this.storage.getStaticData()[this.activityId];
        this.type = acticity.type;
        this.time = acticity.time;
        this.duration = acticity.duration;
        this.coords = acticity.coords;

        console.log(this.coords);
        let c1 = [this.coords[0].lat, this.coords[0].lng];

        this.gmap.showPosition(c1);
        this.gmap.addPolyLines(this.coords);
    }

    deleteActivity() {
        this.storage.removeActivity(this.activityId);
        this.navCtrl.pop();
    }
}
