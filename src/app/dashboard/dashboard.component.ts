import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css','./assets/bootstrap/css/bootstrap.min.css',
  './assets/fonts/font-awesome.min.css','./assets/fonts/ionicons.min.css','./assets/css/Article-List.css','./assets/css/Features-Boxed.css',
  './assets/css/Footer-Basic.css','assets/css/Footer-Clean.css','./assets/css/Header-Blue.css','./assets/css/styles.css' 
],
})
export class DashboardComponent implements OnInit {

  resdata:any;

  constructor(private DashboardService: DashboardService) { }

  ngOnInit(): void {
    this.DashboardService.getProduct().subscribe((Response)=>{
      this.resdata = Response;
    })
  }

}
