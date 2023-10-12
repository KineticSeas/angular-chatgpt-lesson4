import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  uid: any;
  url: any;
  t: any;

  constructor(private http: HttpClient) { 
      this.url='http://localhost:8000'
    }

  postForm(formID: any, promptData: any) {
    const data = {
      "prompt": promptData
    }
  let url = this.url + '/' + formID + '/'
  this.t= this.http.post(url, promptData);
  return this.t;

  }

}
