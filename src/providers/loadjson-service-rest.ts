import 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {LocalStorageService} from "./local-storage-service-rest";

@Injectable()
export class LoadjsonService {

    json_activities: any[];

    constructor(public http: Http, private storage: LocalStorageService) {
        this.checkForLSContent();
    }

    checkForLSContent(){
        let activities = this.storage.activities;

        if(activities == null || activities.length == 0){
            this.http.get('../assets/data/activities.json').map(res => res.json()).subscribe(data => {
                this.json_activities = data.activities;

                for(let i = 0; i < this.json_activities.length; i++){
                    this.storage.setActivity(this.json_activities[i]);
                }
            });
        }
    }
}
