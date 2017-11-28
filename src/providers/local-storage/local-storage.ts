import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Storage} from "@ionic/storage";
import 'rxjs/add/operator/map';
import {Subject} from "rxjs/Subject";

/*
  Generated class for the LocalStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocalStorageProvider {
    public activities: object[] = [];
    public activitiesSubject: Subject<any[]> = new Subject();
    public entries: number = -1;

    constructor(public http: Http, private storage: Storage) {
        this.fetchActivities();
    }

    fetchActivities() {
        this.storage.get("activities").then((data) => {
            if(data == null){
                setTimeout(this.fetchActivities(), 1000);
            } else {
                if(data.length > 0){
                    this.activities = JSON.parse(data);
                    this.entries = this.activities.length;
                } else {
                    this.activities = [];
                    this.entries = 0;
                }
                this.activitiesSubject.next(this.activities);
            }
        });
    }

    getActivities(): Subject<any[]>{
        return this.activitiesSubject;
    }

    getStaticData(){
        return this.activities;
    }

    /**
     * Save a new activity
     *
     * @param activity
     */
    setActivity(activity) {
        if (this.activities) {
            this.activities.push(activity);
        } else {
            this.activities = [];
            this.activities[0] = activity
        }

        this.storage.set("activities", JSON.stringify(this.activities)).then(data => {
            this.activitiesSubject.next(this.activities);
        }).catch(reason => {
          console.log("Could not save activity to storage: " + reason);
        });
    }

    /**
     * Remove an activity
     *
     * @param index
     */
    removeActivity(index) {
        this.activities.splice(index, 1);

        this.storage.set("activities", this.activities).then(data => {
            this.activitiesSubject.next(this.activities);
        }).catch(reason => {
            console.log("Could not remove activity: " + reason);
        })
    }

    /**
     * Clear the whole local storage
     */
    clearStorage() {
        this.storage.clear().then(data => {
            this.activitiesSubject.next(this.activities);
        });
    }
}
