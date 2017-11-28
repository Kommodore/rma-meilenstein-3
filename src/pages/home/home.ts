import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {LocalStorageProvider} from "../../providers/local-storage/local-storage";
import {MapPage} from '../map/map';
import {TabDataProvider} from "../../providers/tab-data/tab-data";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    type: string = "";
    time: string = "";
    duration: number = 0;
    activitiesExist: boolean = false;

    constructor(public navCtrl: NavController, public storage: LocalStorageProvider, public tabData: TabDataProvider) {
        this.storage = storage;
        this.loadLastActivity();
    }

    gotoPage() {
        this.navCtrl.push(MapPage);
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

    addNewActivity() {
        console.log("1"+this.tabData.getData("activitiesAction"));
        this.tabData.setData("activitiesAction", "add");
        console.log("2"+this.tabData.getData("activitiesAction"));
        this.navCtrl.parent.select(1);
    }

    visitSettings(){

    }
}
