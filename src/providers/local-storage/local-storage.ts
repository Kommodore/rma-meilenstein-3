import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Storage} from "@ionic/storage";
import 'rxjs/add/operator/map';

/*
  Generated class for the LocalStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocalStorageProvider {
    private activities: any[] = [];
    public amount: number = -1;

    constructor(public http: Http, private storage: Storage) {
        this.fetchActivities();
    }

    fetchActivities() {
        this.storage.get("activities").then(content => {
        this.activities = JSON.parse(content);
      }).catch(reason => {
          console.log("Fehler beim auslesen aus dem Local Storage: "+reason);
      });
      this.amount = this.activities.length;
    }

    getActivities() {
        return this.activities;
    }

    getActivity(index) {
        return this.activities[index];
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
            this.activities[0] = activity
        }

        this.storage.set("activities", JSON.stringify(this.activities)).then(data => {
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

        this.storage.set("activities", this.activities).catch(reason => {
            console.log("Could not remove activity: " + reason);
        })
    }

    /**
     * Clear the whole local storage
     */
    clearStorage() {
        this.storage.clear();
    }
}
