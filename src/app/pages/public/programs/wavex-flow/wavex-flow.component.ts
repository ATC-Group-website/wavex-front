import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  isSameDay,
  isSameMonth,
  isToday,
  isBefore,
  startOfDay,
  format,
  getYear,
  getMonth,
  setYear,
  setMonth,
  addMinutes,
  set,
} from 'date-fns';

interface CalendarDay {
  date: Date;
  isToday: boolean;
  isCurrentMonth: boolean;
  isSelected: boolean;
  isPast: boolean;
}

interface MonthData {
  date: Date;
  name: string;
  value: number;
  year: number;
}

@Component({
  selector: 'app-wavex-flow',
  imports: [FormsModule],
  templateUrl: './wavex-flow.component.html',
  styleUrl: './wavex-flow.component.css',
})
export class WavexFlowComponent implements OnInit {
  today = new Date();
  currentDate = new Date();
  selectedDate: Date | null = null;
  selectedTime: string | null = null;
  calendarGrid: CalendarDay[][] = [];

  // Available years and months (dynamic based on requirements)
  years: number[] = [];
  months: MonthData[] = [];
  availableTimeSlots: string[] = [];

  get selectedYear(): number {
    return getYear(this.currentDate);
  }

  set selectedYear(year: number) {
    this.currentDate = setYear(this.currentDate, year);
    this.generateMonths();
    this.generateCalendar();
  }

  get selectedMonth(): number {
    return getMonth(this.currentDate);
  }

  set selectedMonth(month: number) {
    this.currentDate = setMonth(this.currentDate, month);
    this.generateCalendar();
  }

  generateYears(): void {
    const currentYear = getYear(this.today);
    const currentMonth = getMonth(this.today); // 0-based (November = 10, December = 11)

    this.years = [currentYear];

    // Include next year only if today is in November or December
    if (currentMonth >= 10) {
      // November (10) or December (11)
      this.years.push(currentYear + 1);
    }
  }

  generateMonths(): void {
    const currentYear = getYear(this.today);
    const currentMonth = getMonth(this.today);
    const selectedYear = getYear(this.currentDate);

    this.months = [];

    if (selectedYear === currentYear) {
      // Current year: show current month + next 2 months (max 3 months)
      for (let i = 0; i < 3; i++) {
        const monthDate = addMonths(this.today, i);
        this.months.push({
          date: monthDate,
          name: format(monthDate, 'MMMM'),
          value: getMonth(monthDate),
          year: getYear(monthDate),
        });
      }
    } else {
      // Next year: show first 3 months (January, February, March)
      const nextYearStart = set(new Date(), {
        year: selectedYear,
        month: 0,
        date: 1,
      });
      for (let i = 0; i < 3; i++) {
        const monthDate = addMonths(nextYearStart, i);
        this.months.push({
          date: monthDate,
          name: format(monthDate, 'MMMM'),
          value: getMonth(monthDate),
          year: getYear(monthDate),
        });
      }
    }
  }

  generateTimeSlots(): void {
    // Generate slots every 30 minutes from 12:00 PM to 6:00 PM
    const timeSlots: string[] = [];
    const startTime = set(new Date(), {
      hours: 12,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    });
    const endTime = set(new Date(), {
      hours: 18,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    });

    let currentTime = startTime;

    while (currentTime <= endTime) {
      timeSlots.push(format(currentTime, 'h:mm a'));
      currentTime = addMinutes(currentTime, 30);
    }

    this.availableTimeSlots = timeSlots;
  }

  generateCalendar(): void {
    const monthStart = startOfMonth(this.currentDate);
    const monthEnd = endOfMonth(this.currentDate);
    const calendarStart = startOfWeek(monthStart, { weekStartsOn: 1 }); // Monday start
    const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });
    const todayStart = startOfDay(this.today);

    const days: CalendarDay[] = [];
    let currentDay = calendarStart;

    // Generate all days for the calendar grid
    while (currentDay <= calendarEnd) {
      const dayStart = startOfDay(currentDay);
      days.push({
        date: new Date(currentDay),
        isToday: isToday(currentDay),
        isCurrentMonth: isSameMonth(currentDay, this.currentDate),
        isSelected: this.selectedDate
          ? isSameDay(currentDay, this.selectedDate)
          : false,
        isPast: isBefore(dayStart, todayStart),
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
    if (day.isCurrentMonth && !day.isPast) {
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

  get isPrevMonthDisabled(): boolean {
    const currentIndex = this.months.findIndex(
      (m) =>
        m.value === getMonth(this.currentDate) &&
        m.year === getYear(this.currentDate)
    );
    return currentIndex <= 0;
  }

  get isNextMonthDisabled(): boolean {
    const currentIndex = this.months.findIndex(
      (m) =>
        m.value === getMonth(this.currentDate) &&
        m.year === getYear(this.currentDate)
    );
    return currentIndex >= this.months.length - 1;
  }

  prevMonth(): void {
    const currentIndex = this.months.findIndex(
      (m) =>
        m.value === getMonth(this.currentDate) &&
        m.year === getYear(this.currentDate)
    );

    if (currentIndex > 0) {
      const prevMonth = this.months[currentIndex - 1];
      this.currentDate = set(this.currentDate, {
        year: prevMonth.year,
        month: prevMonth.value,
      });
      this.generateCalendar();
    }
  }

  nextMonth(): void {
    const currentIndex = this.months.findIndex(
      (m) =>
        m.value === getMonth(this.currentDate) &&
        m.year === getYear(this.currentDate)
    );

    if (currentIndex < this.months.length - 1) {
      const nextMonth = this.months[currentIndex + 1];
      this.currentDate = set(this.currentDate, {
        year: nextMonth.year,
        month: nextMonth.value,
      });
      this.generateCalendar();
    }
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
    this.generateYears();
    this.generateMonths();
    this.generateTimeSlots();
    this.generateCalendar();
  }
}
