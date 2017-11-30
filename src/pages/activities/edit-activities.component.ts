import {Component} from "@angular/core";
import {LocalStorageProvider} from "../../providers/local-storage/local-storage";
import {NavController, NavParams} from "ionic-angular";

@Component({
    templateUrl: 'edit-activities.html'
})
export class EditActivitiesComponent{
    type: String = "Laufen";
    date: String = new Date().toISOString();
    duration: number = 0;
    coords = [];

    constructor(public storage: LocalStorageProvider, navParams: NavParams, public navCtrl: NavController){
        this.storage = storage;

        if(navParams.get("type")){
            this.type = navParams.get("type");
        }
        if(navParams.get("date")){
            this.date = navParams.get("date");
        }
        if(navParams.get("duration")){
            this.duration = navParams.get("duration");
        }

        if(navParams.get("coords")){
            this.coords = navParams.get("coords");
        }
    }

    saveActivity(){
        let newActivity = {
            type: this.type,
            time: this.date,
            duration: this.duration,
            coords: this.coords
        };
        this.storage.setActivity(newActivity);
        this.navCtrl.pop();
    }
}
