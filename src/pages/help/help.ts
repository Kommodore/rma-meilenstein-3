import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {SettingsPage} from "../settings/settings";

/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
    selector: 'page-help',
    templateUrl: 'help.html',
})
export class HelpPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    settingsPage() {
        this.navCtrl.push(SettingsPage);
    }

}
