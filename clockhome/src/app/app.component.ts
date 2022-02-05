import { Component } from '@angular/core';
import { map, Subscription, timer } from 'rxjs';
import { routes } from './app-routing.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // Subscription
  clockSubscription: Subscription;
  reloaderSubscription: Subscription;

  constructor(private router: Router) {
    // Initialize it by default
    let clockTime = 7200000; // Change every 2 hours
    this.clockSubscription = timer(0, clockTime).pipe(
      map(() => {
        let currentRoute = this.router.url;
        let stayingRoutes = routes.filter(route => (route.path) ? !currentRoute.includes(route.path) : true);
        if (stayingRoutes.length < 1) return;
        let pickedRoute = stayingRoutes[Math.floor(Math.random()*stayingRoutes.length)];
        this.router.navigateByUrl(`/${pickedRoute.path}`);
      })
    ).subscribe();
    this.reloaderSubscription = timer(0, 1000).pipe(
      map(() => {
        const currentDate = new Date();

        const toBeReloaded =
          currentDate.getHours() == 0 &&
          currentDate.getMinutes() == 0 &&
          currentDate.getSeconds() == 0;

        if (toBeReloaded) window.location.reload();
      })
    ).subscribe();
  }

}
