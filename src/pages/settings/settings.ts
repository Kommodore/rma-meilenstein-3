import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LocationProvider} from '../../providers/location/location'

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, private locationProvider: LocationProvider) {
  }

  ionViewDidLoad() {

  }

}
