import { Component, HostListener, OnInit } from '@angular/core';
import { map, Subscription, timer } from 'rxjs';
import { DateService } from 'src/app/services/date.service';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss']
})
export class LeagueComponent implements OnInit {

  time: string;
  videoHeight?: number;
  videoWidth?: number;
  source: string;

  timerSubscription: Subscription;

  constructor(private dateService: DateService) {
    this.time = this.dateService.getFormattedDate();
    this.videoWidth = document.documentElement.clientWidth;
    this.videoHeight = document.documentElement.clientHeight;
    this.source = "/assets/video/league/league.mp4"
    this.timerSubscription = timer(0, 1000).pipe(
      map(() => this.time = this.dateService.getFormattedDate())
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

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.videoWidth = document.documentElement.clientWidth;
    this.videoHeight = document.documentElement.clientHeight;
  }

}
