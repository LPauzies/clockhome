import { Component, OnInit } from '@angular/core';
import { map, Subscription, timer } from 'rxjs';
import { DateService } from 'src/app/services/date.service';

@Component({
  selector: 'app-pokewatch',
  templateUrl: './pokewatch.component.html',
  styleUrls: ['./pokewatch.component.scss']
})
export class PokewatchComponent implements OnInit {

  hours: string;
  minutes: string;

  // Subscription
  timerSubscription: Subscription;

  constructor(
    private dateService: DateService
  ) {
    [this.hours, this.minutes] = this.dateService.getFormattedDate().split(":");
    this.timerSubscription = timer(0, 1000).pipe(
      map(() => [this.hours, this.minutes] = this.dateService.getFormattedDate().split(":"))
    ).subscribe();
  }

  ngOnInit(): void {
  }

  goToGitHub(): void {
    window.open("https://github.com/LPauzies", "_blank");
  }
  
  goToLinkedIn(): void {
    window.open("https://www.linkedin.com/in/lucas-pauzies/", "_blank");
  }

}
