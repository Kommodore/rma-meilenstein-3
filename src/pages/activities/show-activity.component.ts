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

    @ViewChild('map') mapElement: ElementRef;
    
    constructor(public navCtrl: NavController, public storage: LocalStorageProvider, public params: NavParams, public gmap:GmapProvider) {
        this.showActivity();
    }

    ionViewDidLoad(){
        this.gmap.initMap(this.mapElement);
    }

    showActivity() {
        this.activityId = this.params.get("activityId");
        let acticity: any = this.storage.getStaticData()[this.activityId];
        this.type = acticity.type;
        this.time = acticity.time;
        this.duration = acticity.duration;
    }

    deleteActivity() {
        this.storage.removeActivity(this.activityId);
        this.navCtrl.pop();
    }
}
