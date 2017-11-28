import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TabDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TabDataProvider {
  private data: object = {};

  constructor(public http: Http) {
  }

  public setData(key: string, data: any){
    this.data[key] = data
  }

  public getData(key: string){
    return this.data[key];
  }
}
