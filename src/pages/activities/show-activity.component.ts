import {Component} from "@angular/core";
import {NavParams, NavController} from "ionic-angular";
import {LocalStorageProvider} from "../../providers/local-storage/local-storage";

@Component({
    templateUrl: 'show-activity.html'
})
export class ShowActivityComponent {
    activityId: number;
    type: string = "";
    time: string = "";
    duration: number = 0;

    constructor(public navCtrl: NavController, public storage: LocalStorageProvider, public params: NavParams) {
        this.showActivity();
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