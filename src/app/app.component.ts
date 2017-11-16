import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {TabsPage} from '../pages/tabs/tabs';
import {InitialDataProvider} from "../providers/initial-data/initial-data";

@Component({
    templateUrl: 'app.html',
    providers: [InitialDataProvider]
})
export class MyApp {
    rootPage: any = TabsPage;

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, initialData: InitialDataProvider) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            initialData.checkForLSContent();
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
}
