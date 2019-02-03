import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data;
  constructor(public http:HttpClient) { }

  getOnlineData() {
   return this.http.get('https://randomuser.me/api/?results=10').pipe();
   
   
  }

  getCachedData(){
    return JSON.parse(localStorage.getItem('data')).results;
  }

  findByUserId(uuid):boolean{
   return this.getCachedData().filter(x => x.login.uuid == uuid).length >0;
  }

}
