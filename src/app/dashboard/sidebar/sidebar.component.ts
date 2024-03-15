import { Component, OnInit, Output } from '@angular/core';
import EventEmitter from 'events';
import { RxseedService } from '../../rxseed.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
  constructor(public service:RxseedService){

    // this.navigateRoute("Dashboard");

  }
  activeTab: string = 'Dashboard';

  ngOnInit(): void {
  }
  @Output() dataEvent:EventEmitter = new EventEmitter<any>();
  navigateRoute(routeName:any){
   this.service.routeName.next(routeName)
   this.activeTab = routeName;

  }

  public lastData=localStorage.getItem('lastTime')
}
