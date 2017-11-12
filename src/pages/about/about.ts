import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocalStorageService } from "../../providers/local-storage-service-rest";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  activities: any[];

  constructor(public navCtrl: NavController, private localStorage: LocalStorageService) {
    this.initActivities();
  }

  initActivities() {
    this.activities = [
      { "type": "running", "dist": "100" },
      { "type": "running", "dist": "100" },
      { "type": "running", "dist": "100" },
      { "type": "running", "dist": "100" }
    ];
  };

  showModal() {
    console.log("Test");
  }

}
