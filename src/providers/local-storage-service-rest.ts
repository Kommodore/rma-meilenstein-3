import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Storage} from '@ionic/storage';

@Injectable()
export class LocalStorageService {

    constructor(public http: Http, private storage:Storage) {
        console.log('Hello Localstorage Provider');
    }

    getActivities(){
        return JSON.parse(this.storage.get("activity").toString());
    }

    getActivity(index){
        return this.getActivities()[index];
    }

    /**
     * Save a new activity
     *
     * @param activity
     */
    setActivity(activity){
        let activities:any[] = this.getActivities();
        activities.push(activity);

        this.storage.set("activity",activities).catch(reason => {
            console.log("Could not save activity to storage: "+reason);
        });
    }

    /**
     * Remove an activity
     *
     * @param index
     */
    removeActivity(index){
        let activities = this.getActivities();
        activities.splice(index, 1);

        this.storage.set("activity", activities).catch(reason => {
            console.log("Could not remove activity: "+reason);
        })
    }

    /**
     * Clear the whole local storage
     */
    clearStorage(){
        this.storage.clear().then(()=>{
            console.log("Local storage cleared");
        });
    }

}
