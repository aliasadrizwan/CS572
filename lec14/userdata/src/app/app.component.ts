import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'userdata';
  constructor(private dataService:DataService, private router:Router){
    //console.log(dataService.getOnlineData);
    
  }
ngOnInit(){
  this.dataService.getOnlineData().subscribe(response => {
    localStorage.setItem('data',JSON.stringify(response));    
  },(error) => {console.log(error)},
  ()=>console.log('Work Done!')
  );
}
}
