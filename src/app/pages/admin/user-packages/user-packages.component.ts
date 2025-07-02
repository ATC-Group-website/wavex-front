import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-packages',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>User Packages</h2>
    <div class="card">
      <div class="card-body">
        <p>Manage user package subscriptions and purchases.</p>
        <p class="text-muted">View and manage user package history here.</p>
      </div>
    </div>
  `,
  styles: [],
})
export class UserPackagesComponent {}
