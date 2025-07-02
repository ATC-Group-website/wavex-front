import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Email Notifications</h2>
    <div class="card">
      <div class="card-body">
        <p>Email notification management system.</p>
        <p class="text-muted">Configure and manage email notifications here.</p>
      </div>
    </div>
  `,
  styles: [],
})
export class NotificationsComponent {}
