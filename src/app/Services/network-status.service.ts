import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkStatusService {
  private online = window.navigator.onLine;

  private onlineStatus = new BehaviorSubject<boolean>(true);

  getOnlineStatus() {
    return this.onlineStatus.asObservable();
  }

  setOnlineStatus(isOnline: boolean) {
    this.onlineStatus.next(isOnline);
  }



  constructor() {
    window.addEventListener('online', () => {
      this.online = true;
      this.showOnlineAlert();
    });

    window.addEventListener('offline', () => {
      this.online = false;
      this.showOfflineAlert();
    });
  }

  isOnline(): boolean {
    return this.online;
  }

   showOnlineAlert() {
    alert('Back Online');
  
  }

   showOfflineAlert() {
    alert('No Internet Connection');
  }
}