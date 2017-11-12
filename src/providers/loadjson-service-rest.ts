import 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

let brokersURL = 'http://localhost:8100/src/assets/data/data';

@Injectable()
export class LoadjsonService {

    constructor(public http: Http) {

    }

    findAll() {
        alert("findall");
        return this.http.get(brokersURL)
            .map(res => res.json())
            .toPromise();
    }

    findById(id) {
        return this.http.get(brokersURL + id)
            .map(res => res.json())
            .toPromise();
    }

}