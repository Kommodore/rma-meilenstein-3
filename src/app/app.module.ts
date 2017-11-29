import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {ActivitiesPage} from '../pages/activities/activities';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {MapPage} from "../pages/map/map";
import {HelpPage} from "../pages/help/help";
import {SettingsPage} from "../pages/settings/settings";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HttpModule} from "@angular/http";
import {IonicStorageModule} from "@ionic/storage";
import {LocalStorageProvider} from '../providers/local-storage/local-storage';
import {InitialDataProvider} from '../providers/initial-data/initial-data';
import {EditActivitiesComponent} from "../pages/activities/edit-activities.component";
import {ShowActivityComponent} from "../pages/activities/show-activity.component";
import {Geolocation} from '@ionic-native/geolocation';
import {GoogleMaps} from '@ionic-native/google-maps';
import {GmapProvider} from '../providers/gmap/gmap';
import {LocationProvider} from '../providers/location/location';
import { SharedModuleProvider } from '../providers/shared-module/shared-module';

@NgModule({
    declarations: [
        MyApp,
        ActivitiesPage,
        HelpPage,
        HomePage,
        TabsPage,
        MapPage,
        SettingsPage,
        EditActivitiesComponent,
        ShowActivityComponent
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        IonicStorageModule.forRoot(),
        HttpModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        ActivitiesPage,
        HelpPage,
        HomePage,
        TabsPage,
        MapPage,
        SettingsPage,
        EditActivitiesComponent,
        ShowActivityComponent
    ],
    providers: [
        StatusBar,
        SplashScreen,
        Geolocation,
        GoogleMaps,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        LocalStorageProvider,
        InitialDataProvider,
        GmapProvider,
        LocationProvider,
        SharedModuleProvider
    ]
})
export class AppModule {
}
