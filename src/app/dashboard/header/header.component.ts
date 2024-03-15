import { Component, OnInit } from '@angular/core';
import { RxseedService } from '../../rxseed.service';
import { Router } from '@angular/router';
import { MasterService } from '../../Services/master.service';
import { log } from 'console';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  headerRouteName: any = "Dashboard";
  constructor(public service: RxseedService, private router: Router, private _service: MasterService) {

  }
  public login: any;
  ngOnInit(): void {
    this.service.routeName.subscribe((routeName: any) => {
      this.headerRouteName = routeName;
      this.login = this._service.postdata("auth-user", {})
    })
  }
  LogOut() {
    function getFormattedYesterdayTime() {
      // Get the current date
      const currentDate = new Date();
    
      // Subtract one day to get yesterday's date
      const yesterday = new Date(currentDate);
      yesterday.setDate(currentDate.getDate() - 1);
    
      // Format the time in the desired format
      const formattedTime = yesterday.toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      });
    
      return formattedTime;
    }
    
    // Call the function to get yesterday's formatted time
    const yesterdayTime = getFormattedYesterdayTime();
    
    // Save the formatted time to localStorage
    localStorage.setItem('lastTime', yesterdayTime);
    
    this.router.navigate([''])
  }
  name=localStorage.getItem('name')



}
