import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {LocalStorageProvider} from "../local-storage/local-storage";

/*
  Generated class for the InitialDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InitialDataProvider {
    json_activities: any[];

    constructor(public http: Http, private storage: LocalStorageProvider) {
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
