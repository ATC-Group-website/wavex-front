import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getAllPackages, Package } from '../../../fake-db';

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Packages Management</h2>
    <div class="row">
      <div class="col-md-4" *ngFor="let package of packages">
        <div class="card mb-3">
          <div class="card-body">
            <h5>{{ package.name }}</h5>
            <p class="text-muted">
              {{ package.description.substring(0, 80) }}...
            </p>
            <div class="d-flex justify-content-between">
              <span class="fw-bold">{{
                package.price | currency : 'EGP'
              }}</span>
              <span class="badge bg-info"
                >{{ package.sessions_included }} sessions</span
              >
            </div>
            <div class="mt-2">
              <span
                [class]="
                  package.is_active ? 'badge bg-success' : 'badge bg-secondary'
                "
              >
                {{ package.is_active ? 'Active' : 'Inactive' }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class PackagesComponent implements OnInit {
  packages: Package[] = [];

  ngOnInit() {
    this.packages = getAllPackages();
  }
}
