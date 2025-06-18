import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  subMonths,
  addMonths,
  isSameDay,
  isSameMonth,
  isToday,
  format,
  getYear,
  getMonth,
  setYear,
  setMonth,
} from 'date-fns';

interface CalendarDay {
  date: Date;
  isToday: boolean;
  isCurrentMonth: boolean;
  isSelected: boolean;
}

@Component({
  selector: 'app-single-program',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './single-program.component.html',
  styleUrl: './single-program.component.css',
})
export class SingleProgramComponent implements OnInit {
  currentDate = new Date();
  selectedDate: Date | null = null;
  selectedTime: string | null = null;
  calendarGrid: CalendarDay[][] = [];

  // Available years and months
  years: number[] = Array.from({ length: 11 }, (_, i) => 2020 + i); // 2020-2030
  months = [
    { value: 0, name: 'January' },
    { value: 1, name: 'February' },
    { value: 2, name: 'March' },
    { value: 3, name: 'April' },
    { value: 4, name: 'May' },
    { value: 5, name: 'June' },
    { value: 6, name: 'July' },
    { value: 7, name: 'August' },
    { value: 8, name: 'September' },
    { value: 9, name: 'October' },
    { value: 10, name: 'November' },
    { value: 11, name: 'December' },
  ];

  // Time slots
  timeSlots: string[] = [
    '9:30 PM',
    '9:30 PM',
    '9:30 PM',
    '9:30 PM',
    '9:30 PM',
    '9:30 PM',
    '9:30 PM',
    '9:30 PM',
    '9:30 PM',
    '9:30 PM',
    '9:30 PM',
    '9:30 PM',
  ];

  get selectedYear(): number {
    return getYear(this.currentDate);
  }

  set selectedYear(year: number) {
    this.currentDate = setYear(this.currentDate, year);
    this.generateCalendar();
  }

  get selectedMonth(): number {
    return getMonth(this.currentDate);
  }

  set selectedMonth(month: number) {
    this.currentDate = setMonth(this.currentDate, month);
    this.generateCalendar();
  }

  generateCalendar(): void {
    const monthStart = startOfMonth(this.currentDate);
    const monthEnd = endOfMonth(this.currentDate);
    const calendarStart = startOfWeek(monthStart, { weekStartsOn: 1 }); // Monday start
    const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });

    const days: CalendarDay[] = [];
    let currentDay = calendarStart;

    // Generate all days for the calendar grid
    while (currentDay <= calendarEnd) {
      days.push({
        date: new Date(currentDay),
        isToday: isToday(currentDay),
        isCurrentMonth: isSameMonth(currentDay, this.currentDate),
        isSelected: this.selectedDate
          ? isSameDay(currentDay, this.selectedDate)
          : false,
      });
      currentDay = addDays(currentDay, 1);
    }

    // Group days into weeks (7 days each)
    this.calendarGrid = [];
    for (let i = 0; i < days.length; i += 7) {
      this.calendarGrid.push(days.slice(i, i + 7));
    }
  }

  selectDate(day: CalendarDay): void {
    if (day.isCurrentMonth) {
      // Update selected state
      this.calendarGrid.forEach((week) => {
        week.forEach((d) => (d.isSelected = false));
      });
      day.isSelected = true;
      this.selectedDate = day.date;

      // Clear selected time when date changes
      this.selectedTime = null;
    }
  }

  selectTime(time: string): void {
    this.selectedTime = time;
  }

  prevMonth(): void {
    this.currentDate = subMonths(this.currentDate, 1);
    this.generateCalendar();
  }

  nextMonth(): void {
    this.currentDate = addMonths(this.currentDate, 1);
    this.generateCalendar();
  }

  bookNow(): void {
    if (this.selectedDate && this.selectedTime) {
      const booking = {
        date: this.selectedDate,
        time: this.selectedTime,
        program: 'WaveX Circuit',
      };
      console.log('Booking confirmed:', booking);
      alert(
        `Booking confirmed for ${format(
          this.selectedDate,
          'MMMM d, yyyy'
        )} at ${this.selectedTime}`
      );
    } else {
      alert('Please select both a date and time slot.');
    }
  }

  formatDate(date: Date, formatStr: string): string {
    return format(date, formatStr);
  }

  ngOnInit(): void {
    this.generateCalendar();
  }
}
