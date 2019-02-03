import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-users',
  template: `
    <p>
      users List!
    </p>  
      <ul>
        <li *ngFor="let item of data"><a [routerLink]="['userdetails',item.login.uuid]">{{item.name.title | uppercase}} {{item.name.first | uppercase}} {{item.name.last | uppercase}}</a></li>
      <ul>
      
  `,
  styles: []
})
export class UsersComponent implements OnInit {
  private data;
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.data  = this.dataService.getCachedData();
    //console.log(this.data);
  }

}
