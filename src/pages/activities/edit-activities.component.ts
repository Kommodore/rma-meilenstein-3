import {Component} from "@angular/core";
import {ViewController} from "ionic-angular";

import {LocalStorageProvider} from "../../providers/local-storage/local-storage";

@Component({
    templateUrl: 'edit-activities.html'
})
export class EditActivitiesComponent{
    constructor(private storage: LocalStorageProvider, private viewCtrl: ViewController){
        this.storage = storage;
    }

    dismiss(){
        this.viewCtrl.dismiss();
    }

    saveActivity(){

    }
}