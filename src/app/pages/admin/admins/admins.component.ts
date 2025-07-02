import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getAllAdmins, Admin } from '../../../fake-db';

@Component({
  selector: 'app-admins',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Admin Accounts</h2>
    <div class="row">
      <div class="col-md-6" *ngFor="let admin of admins">
        <div class="card mb-3">
          <div class="card-body">
            <h5>{{ admin.first_name }} {{ admin.last_name }}</h5>
            <p class="text-muted">{{ admin.email }}</p>
            <span class="badge bg-primary">{{ admin.role }}</span>
            <span
              [class]="
                admin.is_active ? 'badge bg-success' : 'badge bg-secondary'
              "
            >
              {{ admin.is_active ? 'Active' : 'Inactive' }}
            </span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class AdminsComponent implements OnInit {
  admins: Admin[] = [];

  ngOnInit() {
    this.admins = getAllAdmins();
  }
}
