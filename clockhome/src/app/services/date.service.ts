import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  getFormattedDate(): string {
    const currentDate = new Date();
    return DateService.formatDate(currentDate.getHours()) + ":" + DateService.formatDate(currentDate.getMinutes());
  }

  static formatDate(timePart: number): string {
    return timePart < 10 ? `0${timePart}` : `${timePart}`;
  }
}
