import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class ApiService {

  constructor(protected _http: HttpClient) { }

  getRequest(url, backend: boolean = true) {
    let headers : HttpHeaders;
    if(backend){
      headers = new HttpHeaders({
        "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
        'x-rapidapi-key': environment.X_API_KEY, 
      });
    }

    const options = { headers: headers };

    return this._http.get(url, options);
  }

  postRequest(url, params, backend: boolean = true) {

    return this._http.post(url, params);
  }

}