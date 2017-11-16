import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { LocalStorageService } from "../../providers/local-storage-service-rest";


@Component({
  selector: 'page-activities',
  templateUrl: 'activities.html'
})
export class ActivitiesPage {

  activities: any[];

  constructor(
    public navCtrl: NavController,
    private localStorage: LocalStorageService,
    private modal: ModalController
  ) {
    this.initActivities();
  }

  initActivities() {
    this.activities = this.localStorage.getActivities();
  };

  showModal() {
    const modalPage = this.modal.create("infomodal");
    modalPage.present().then((reason) => {

    });
  }

  addActivity(){

  }

}
