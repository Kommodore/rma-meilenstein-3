import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SharedModuleProvider {

    private static data: object = {};

    constructor(public http: Http) {
    }

    static setData(key: string, data: any) {
        SharedModuleProvider.data[key] = data;
    }

    static getData(key: string) {
        return SharedModuleProvider.data[key];
    }

}
