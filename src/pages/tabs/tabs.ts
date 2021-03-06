import {Component} from '@angular/core';

import {ActivitiesPage} from '../activities/activities';
import {HomePage} from '../home/home';
import {HelpPage} from "../help/help";
import {NavController} from "ionic-angular";

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

    tab1Root = HomePage;
    tab2Root = ActivitiesPage;
    tab3Root = HelpPage;

    constructor(public navCtrl :NavController) {

    }
}
