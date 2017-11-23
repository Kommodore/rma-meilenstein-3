import {Component} from "@angular/core";
import {NavParams, ViewController} from "ionic-angular";

import {LocalStorageProvider} from "../../providers/local-storage/local-storage";

@Component({
    templateUrl: 'show-activity.html'
})
export class ShowActivityComponent{
    activityId: number;
    mode: string = "";

    constructor(private storage: LocalStorageProvider, private params: NavParams, private viewCtrl: ViewController){
        this.storage = storage;
        this.activityId = params.get("activityId");
    }

    dismiss(){
        this.viewCtrl.dismiss();
    }

    showActivity(){

    }
}