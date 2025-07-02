import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getAllSessions, Session } from '../../../fake-db';

@Component({
  selector: 'app-sessions',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Sessions Management</h2>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Program</th>
            <th>Date</th>
            <th>Time</th>
            <th>Capacity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let session of sessions">
            <td>{{ session.id }}</td>
            <td>Program {{ session.program_id }}</td>
            <td>{{ session.session_date }}</td>
            <td>{{ session.start_time }} - {{ session.end_time }}</td>
            <td>{{ session.current_bookings }}/{{ session.max_capacity }}</td>
            <td>
              <span [class]="getStatusClass(session.status)">{{
                session.status
              }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: [],
})
export class SessionsComponent implements OnInit {
  sessions: Session[] = [];

  ngOnInit() {
    this.sessions = getAllSessions();
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'scheduled':
        return 'badge bg-primary';
      case 'completed':
        return 'badge bg-success';
      case 'cancelled':
        return 'badge bg-danger';
      default:
        return 'badge bg-secondary';
    }
  }
}
