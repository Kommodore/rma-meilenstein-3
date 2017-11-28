import {Component} from "@angular/core";
import {LocalStorageProvider} from "../../providers/local-storage/local-storage";

@Component({
    templateUrl: 'edit-activities.html'
})
export class EditActivitiesComponent{
    constructor(public storage: LocalStorageProvider){
        this.storage = storage;
    }

    saveActivity(){

    }
}