import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import {LocalStorageProvider} from "../../providers/local-storage/local-storage";
import {EditActivitiesComponent} from "./edit-activities.component";


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

  showModal(index: number = 0) {
    if(index){
      console.log("Activity: $(index)");
    } else {
      console.log("No index");
    }

    let editActivity = this.modal.create(EditActivitiesComponent);
    editActivity.present().then((reason) => {

    });
  }

  addActivity(){

  }

}
