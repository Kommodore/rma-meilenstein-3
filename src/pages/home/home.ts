import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {LocalStorageProvider} from "../../providers/local-storage/local-storage";
import {MapPage} from '../map/map';
import {SettingsPage} from '../settings/settings';
import {InitialDataProvider} from "../../providers/initial-data/initial-data";
import {SharedModuleProvider} from "../../providers/shared-module/shared-module";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    type: string = "";
    time: string = "";
    duration: number = 0;
    activitiesExist: boolean = false;

    constructor(public navCtrl: NavController,
                public initialData: InitialDataProvider,
                public storage: LocalStorageProvider,
                public shared: SharedModuleProvider) {
        this.storage = storage;
        this.loadLastActivity();
    }

    ionViewWillEnter(){
        this.initialData.checkForLSContent();
    }

    pushPage(page){
      if(page == 0){
        this.navCtrl.push(MapPage);
      }else if(page == 1){
        this.navCtrl.push(SettingsPage);
      }
    }

    private loadLastActivity() {
        this.storage.getActivities().subscribe((data) => {
            this.activitiesExist = (this.storage.entries > 0);
            if(this.activitiesExist){
                this.type = data[this.storage.entries-1].type;
                this.time = data[this.storage.entries-1].time;
                this.duration = data[this.storage.entries-1].duration;
            }
        });
    }

    addActivity(){
        SharedModuleProvider.setData("addActivityFromHome", true);
        this.navCtrl.parent.select(1);
    }

}
