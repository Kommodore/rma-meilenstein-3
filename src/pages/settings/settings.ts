import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LocationProvider} from '../../providers/location/location'

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  constructor(public navCtrl: NavController, public locationProvider: LocationProvider) {
  }

  ionViewDidLoad() {

  }

}
