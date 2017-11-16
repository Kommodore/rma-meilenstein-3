import {Component} from "@angular/core";
import {LocalStorageProvider} from "../../providers/local-storage/local-storage";

@Component({
    selector: 'page-edit-activities',
    template: 'edit-activities.html'
})
export class EditActivitiesComponent{
    activityId: number;

    constructor(storage: LocalStorageProvider, activityId: number){
        this.activityId = activityId;
    }

    saveActivity(){
        if(this.activityId){

        }
    }
}