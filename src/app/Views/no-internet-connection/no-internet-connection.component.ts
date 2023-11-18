import { Component, OnInit } from '@angular/core';
import { NetworkStatusService } from 'src/app/Services/network-status.service';

@Component({
  selector: 'app-no-internet-connection',
  templateUrl: './no-internet-connection.component.html',
  styleUrls: ['./no-internet-connection.component.css']
})
export class NoInternetConnectionComponent implements OnInit {

  isOnline = true;

  constructor(private networkStatusService: NetworkStatusService) {}

  ngOnInit(): void {
    this.networkStatusService.getOnlineStatus().subscribe((isOnline) => {
      this.isOnline = isOnline;
    });
  }
  reloadPage() {
    location.reload();
  }
}
