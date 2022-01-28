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
  timerSubscription: Subscription;

  constructor(private router: Router) {
    // Initialize it by default
    let timeRotation = 86400000; // Milliseconds in 1 whole day
    if (routes[0].path) this.router.navigateByUrl(routes[0].path);
    this.timerSubscription = timer(0, timeRotation).pipe(
      map(() => {
        let currentRoute = this.router.url;
        let stayingRoutes = routes.filter(route => (route.path) ? currentRoute.includes(route.path) : false);
        let pickedRoute = stayingRoutes[Math.floor(Math.random()*stayingRoutes.length)];
        this.router.navigateByUrl(`/${pickedRoute.path}`);
      })
    ).subscribe();
  }

}
