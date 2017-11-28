import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Storage} from "@ionic/storage";
import 'rxjs/add/operator/map';

/*
  Generated class for the InitialDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InitialDataProvider {
    constructor(public http: Http, public storage: Storage) {
    }

    checkForLSContent(){
        this.storage.get("activities").then((activities) => {
            if(activities === null){
                this.http.get('../assets/data/activities.json').map(res => res.json()).subscribe((data) => {
                    this.storage.set("activities", JSON.stringify(data.activities)).catch((error) => {
                        console.log("Couldn't create initial data: "+error);
                    });
                });
            }
        });
    }
}
