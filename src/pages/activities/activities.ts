import {Component} from '@angular/core';
import {NavController, ModalController, Events} from 'ionic-angular';

import {LocalStorageProvider} from "../../providers/local-storage/local-storage";
import {EditActivitiesComponent} from "./edit-activities.component";
import {ShowActivityComponent} from "./show-activity.component";
import {TabDataProvider} from "../../providers/tab-data/tab-data";


@Component({
    selector: 'page-activities',
    templateUrl: 'activities.html'
})
export class ActivitiesPage {

    activities: object[];

    constructor(public navCtrl: NavController,
                public events: Events,
                private localStorage: LocalStorageProvider,
                private modal: ModalController,
                public tabData: TabDataProvider) {
        this.initActivities();
    }

    initActivities() {
        this.activities = this.localStorage.getStaticData();
        this.localStorage.getActivities().subscribe((data) => {
            this.activities = data;
        });

        console.log("3" + this.tabData.getData("activitiesAction"));
        if (this.tabData.getData("activitiesAction") && this.tabData.getData("activitiesAction") == "add") {
            this.tabData.setData("activitiesAction", "done");
            console.log("4" + this.tabData.getData("activitiesAction"));
            this.addActivity();
        }
    }

    addActivity() {
        let editActivity = this.modal.create(EditActivitiesComponent);
        editActivity.onDidDismiss(data => {
            this.initActivities();
        });
        editActivity.present();
    }

    editActivity(activityId) {
        let editActivity = this.modal.create(ShowActivityComponent, {activityId: activityId});
        editActivity.present();
    }

}
