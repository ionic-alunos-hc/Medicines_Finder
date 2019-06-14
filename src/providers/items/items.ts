import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Item } from '../../models/item';
import { ApiProvider } from '../api/api';
/*
  Generated class for the ItemsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ItemsProvider {

  constructor(public api: ApiProvider) {
    console.log('Hello ItemsProvider Provider');
  }

  query(params?: any) {
    return this.api.get('/items', params);
  }

  add(item: Item) {
  }

  delete(item: Item) {
  }

}


