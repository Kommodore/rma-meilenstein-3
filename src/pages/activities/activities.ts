import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import {LocalStorageProvider} from "../../providers/local-storage/local-storage";
import {EditActivitiesComponent} from "./edit-activities.component";
import {ShowActivityComponent} from "./show-activity.component";


@Component({
    selector: 'page-activities',
    templateUrl: 'activities.html'
})
export class ActivitiesPage {

    activities: object[];

    constructor(public navCtrl: NavController,
                private localStorage: LocalStorageProvider,
                public navParams: NavParams) {
        this.initActivities();
    }

    initActivities() {
        this.activities = this.localStorage.getStaticData();
        this.localStorage.getActivities().subscribe((data) => {
            this.activities = data;
        });

        console.log(this.navParams.get("action"));
        if(this.navParams.get("action") == "add"){
            this.addActivity();
        }
    }

    addActivity() {
        this.navCtrl.push(EditActivitiesComponent);
    }

    editActivity(activityId) {
        this.navCtrl.push(ShowActivityComponent, {activityId: activityId});
    }

}
