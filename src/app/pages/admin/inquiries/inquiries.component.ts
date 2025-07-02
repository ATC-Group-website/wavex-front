import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getAllInquiries, Inquiry } from '../../../fake-db';

@Component({
  selector: 'app-inquiries',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="inquiries-page">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h2 class="fw-bold text-dark">Customer Inquiries</h2>
        <button class="btn btn-outline-success">
          <i class="fas fa-download me-2"></i>Export Data
        </button>
      </div>

      <div class="card border-0 shadow-sm">
        <div class="card-header bg-white border-bottom">
          <h5 class="card-title mb-0">
            <i class="fas fa-envelope me-2 text-primary"></i>All Inquiries ({{
              inquiries.length
            }})
          </h5>
        </div>
        <div class="card-body p-0">
          <div class="table-responsive">
            <table class="table table-hover mb-0">
              <thead class="table-light">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Country</th>
                  <th>Message</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let inquiry of inquiries">
                  <td class="fw-semibold">{{ inquiry.name }}</td>
                  <td class="text-muted">{{ inquiry.email }}</td>
                  <td>
                    <span class="badge bg-light text-dark">{{
                      inquiry.country
                    }}</span>
                  </td>
                  <td>
                    <span
                      [title]="inquiry.message"
                      class="text-truncate d-inline-block"
                      style="max-width: 200px;"
                    >
                      {{ inquiry.message?.substring(0, 50)
                      }}{{ (inquiry.message?.length || 0) > 50 ? '...' : '' }}
                    </span>
                  </td>
                  <td class="text-muted">
                    {{ inquiry.created_at | date : 'MMM d, y' }}
                  </td>
                  <td>
                    <div class="btn-group btn-group-sm">
                      <button
                        class="btn btn-outline-primary"
                        title="View Details"
                      >
                        <i class="fas fa-eye"></i>
                      </button>
                      <button class="btn btn-outline-success" title="Reply">
                        <i class="fas fa-reply"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .inquiries-page {
        padding: 0;
      }
      .card {
        border-radius: 12px;
      }
      .card-header {
        border-radius: 12px 12px 0 0 !important;
      }
      .table th {
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      .table td {
        vertical-align: middle;
      }
    `,
  ],
})
export class InquiriesComponent implements OnInit {
  inquiries: Inquiry[] = [];

  ngOnInit() {
    this.inquiries = getAllInquiries();
  }
}
