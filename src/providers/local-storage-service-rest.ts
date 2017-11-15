import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Storage} from "@ionic/storage";

@Injectable()
export class LocalStorageService {

  activities: any[] = [];
  constructor(public http: Http, private storage: Storage) {
    this.fetchActivities();
  }

  fetchActivities(){
      let data = JSON.parse(window.localStorage.getItem("activities"));
      if(data != null){
          this.activities = data;
      }

      /*this.storage.get("activities").then(content => {
      this.activities = JSON.parse(content);
    }).catch(reason => {
        console.log("Fehler beim auslesen aus dem Local Storage: "+reason);
    });*/
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
    if(this.activities){
        this.activities.push(activity);
    } else {
      this.activities[0] = activity
    }
    window.localStorage.setItem("activities", JSON.stringify(this.activities));
    /*this.storage.set("activities", JSON.stringify(this.activities)).then(data => {
      console.log("Added to storage "+ data);
    }).catch(reason => {
      console.log("Could not save activity to storage: " + reason);
    });*/
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
    /*this.storage.clear().then(() => {
      console.log("Local storage cleared");
    });*/
  }

}
