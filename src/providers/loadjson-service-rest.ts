import 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {LocalStorageService} from "./local-storage-service-rest";

@Injectable()
export class LoadjsonService {

    constructor(public http: Http, private storage: LocalStorageService) {
        this.checkForLSContent();
    }

    checkForLSContent(){
        let activities = this.storage.getActivities();
        /*if(activities.length == 0){
            let json: any[] = this.http.get('../assets/data/activities.json');
            for(let i = 0; i < json.length; i++){
                this.storage.setActivity(json[i]);
            }
        }*/
    }
}