import {Component} from "@angular/core";
import {LocalStorageProvider} from "../../providers/local-storage/local-storage";

@Component({
    templateUrl: 'edit-activities.html'
})
export class EditActivitiesComponent{
    myDate: String = new Date().toISOString();
    type: String = "Laufen";
    duration: number = 0;
    
    constructor(public storage: LocalStorageProvider){
        this.storage = storage;
    }

    saveActivity(){

    }
}