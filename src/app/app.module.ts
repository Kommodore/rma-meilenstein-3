import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {ActivitiesPage} from '../pages/activities/activities';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {MapPage} from '../pages/map/map';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HttpModule} from "@angular/http";
import {IonicStorageModule} from "@ionic/storage";
import {LocalStorageProvider} from '../providers/local-storage/local-storage';
import {InitialDataProvider} from '../providers/initial-data/initial-data';
import {EditActivitiesComponent} from "../pages/activities/edit-activities.component";
import {ShowActivityComponent} from "../pages/activities/show-activity.component";
import { Geolocation } from '@ionic-native/geolocation';


@NgModule({
    declarations: [
        MyApp,
        ActivitiesPage,
        ContactPage,
        HomePage,
        TabsPage,
        MapPage,
        EditActivitiesComponent,
        ShowActivityComponent
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        IonicStorageModule.forRoot(),
        HttpModule,
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        ActivitiesPage,
        ContactPage,
        HomePage,
        TabsPage,
        MapPage,
        EditActivitiesComponent,
        ShowActivityComponent
    ],
    providers: [
        StatusBar,
        SplashScreen,
        Geolocation,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        LocalStorageProvider,
        InitialDataProvider
    ]
})
export class AppModule {
}
