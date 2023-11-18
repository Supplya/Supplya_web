import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { NetworkStatusService } from './Services/network-status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Supplya_web';
  isOnline = true;
  loading = true;

  constructor(private router: Router, private networkStatusService: NetworkStatusService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.loading = false;
      }
    });
  }

  ngOnInit() {
    // Simulate some loading time (remove this in actual application)
    setTimeout(() => {
      this.loading = false;
    }, 3000);

  }
  }

  








