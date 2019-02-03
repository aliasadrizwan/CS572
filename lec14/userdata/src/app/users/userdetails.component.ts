import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersComponent } from './users.component';
import { DataService } from '../data.service';
@Component({
  selector: 'app-userdetails',
  template: `
    <p>
     <code>
      <pre>{{userdetails | json}}</pre>
      </code>
    </p>
  `,
  styles: []
})
export class UserdetailsComponent implements OnInit {
private userId;
private userdetails;
  constructor(private activatedRoutes:ActivatedRoute, private dataService:DataService) {
    activatedRoutes.params.subscribe(params => this.userId = params['uuid']);
   }

  ngOnInit() {
    this.userdetails = this.dataService.getCachedData().filter(d => d.login.uuid==this.userId);
  }

}
