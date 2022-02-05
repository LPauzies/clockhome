import { Component, OnInit } from '@angular/core';
import { map, Subscription, timer } from 'rxjs';
import { DateService } from 'src/app/services/date.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pathfinder',
  templateUrl: './pathfinder.component.html',
  styleUrls: ['./pathfinder.component.scss']
})
export class PathfinderComponent implements OnInit {

  time: string;
  currentBackground: string; // Refer to string constructed as value for property "background-image"
  backgrounds = [ "a", "b", "c", "d", "e", "f" ] // Refer the name of the files as background

  // Subscription
  timerSubscription: Subscription;
  backgroundSubscription: Subscription;

  constructor(private dateService: DateService) {
    this.time = this.dateService.getFormattedDate();
    this.currentBackground = this.getRandomBackground();
    this.timerSubscription = timer(0, 1000).pipe(
      map(() => this.time = this.dateService.getFormattedDate())
    ).subscribe();
    this.backgroundSubscription = timer(0, 600000).pipe(
      map(() => this.currentBackground = this.getRandomBackground())
    ).subscribe();
  }

  ngOnInit(): void {
  }

  getRandomBackground(): string {
    let backgrounds = this.backgrounds.filter(e => e != this.currentBackground);
    let pickedBackground = backgrounds[Math.floor(Math.random()*backgrounds.length)];
    return `url('${environment.url}/assets/img/pathfinder/${pickedBackground}.jpg')`;
  }

  goToGitHub(): void {
    window.open("https://github.com/LPauzies", "_blank");
  }
  
  goToLinkedIn(): void {
    window.open("https://www.linkedin.com/in/lucas-pauzies/", "_blank");
  }

}
