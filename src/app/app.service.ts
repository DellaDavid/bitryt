import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_URLS} from './shared/config/app.constants'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _httpClient: HttpClient) { }

  getUserList(){
    return this._httpClient.get(`${API_URLS}users`);
  }
  getTaskList(){
    return this._httpClient.get(`${API_URLS}posts`)
  }
}
