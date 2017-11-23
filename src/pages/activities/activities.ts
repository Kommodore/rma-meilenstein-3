import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import {LocalStorageProvider} from "../../providers/local-storage/local-storage";
import {EditActivitiesComponent} from "./edit-activities.component";
import {ShowActivityComponent} from "./show-activity.component";


@Component({
  selector: 'page-activities',
  templateUrl: 'activities.html'
})
export class ActivitiesPage {

  activities: any[];

  constructor(
    public navCtrl: NavController,
    private localStorage: LocalStorageProvider,
    private modal: ModalController
  ) {
    this.initActivities();
  }

  initActivities() {
    this.activities = this.localStorage.getActivities();
  };

  addActivity(){
      let editActivity = this.modal.create(EditActivitiesComponent);
      editActivity.onDidDismiss(data =>{
          this.initActivities();
      });
      editActivity.present();
  }

  editActivity(activityId) {
    let editActivity = this.modal.create(ShowActivityComponent, {activityId: activityId});
    editActivity.present();
  }

}
