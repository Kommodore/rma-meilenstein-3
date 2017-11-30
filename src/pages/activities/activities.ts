import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {LocalStorageProvider} from "../../providers/local-storage/local-storage";
import {EditActivitiesComponent} from "./edit-activities.component";
import {ShowActivityComponent} from "./show-activity.component";
import {SharedModuleProvider} from "../../providers/shared-module/shared-module";
import {MapPage} from "../map/map";
import {SettingsPage} from "../settings/settings";


@Component({
    selector: 'page-activities',
    templateUrl: 'activities.html'
})
export class ActivitiesPage {

    activities: object[];

    constructor(public navCtrl: NavController,
                public localStorage: LocalStorageProvider,
                public shared: SharedModuleProvider) {
        this.initActivities();
    }

    ionViewWillEnter(){
        if(SharedModuleProvider.getData("addActivityFromHome") == true){
            SharedModuleProvider.setData("addActivityFromHome", false);
            this.addActivity(true);
        }
    }

    initActivities() {
        this.activities = this.localStorage.getStaticData();
        this.localStorage.getActivities().subscribe((data) => {
            this.activities = data;
        });
    }

    addActivity(record: boolean) {
        if(record){
            this.navCtrl.push(MapPage);
        } else {
            this.navCtrl.push(EditActivitiesComponent);
        }
    }

    editActivity(activityId) {
        this.navCtrl.push(ShowActivityComponent, {activityId: activityId});
    }

    settingsPage(){
        this.navCtrl.push(SettingsPage);
    }
}
