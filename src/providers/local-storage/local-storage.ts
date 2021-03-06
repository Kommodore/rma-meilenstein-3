import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Storage} from "@ionic/storage";
import 'rxjs/add/operator/map';
import {Subject} from "rxjs/Subject";

@Injectable()
export class LocalStorageProvider {
    public activities: Activities[] = [];
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

    getStaticData(): Activities[]{
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

        this.storage.set("activities", JSON.stringify(this.activities)).then(() => {
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

        this.storage.set("activities", this.activities).then(() => {
            this.activitiesSubject.next(this.activities);
        }).catch(reason => {
            console.log("Could not remove activity: " + reason);
        })
    }

    /**
     * Clear the whole local storage
     */
    clearStorage() {
        this.storage.clear().then(() => {
            this.activitiesSubject.next(this.activities);
        });
    }
}

class Activities{
    type: string;
    time: string;
    duration: number;
    coords: Coords[];
}

class Coords{
    lat: number;
    lng: number;
}
