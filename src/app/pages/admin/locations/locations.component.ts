import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getAllLocations, Location } from '../../../fake-db';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Locations Management</h2>
    <div class="row">
      <div class="col-md-6" *ngFor="let location of locations">
        <div class="card mb-3">
          <div class="card-body">
            <h5>{{ location.venue_name }}</h5>
            <p class="text-muted">{{ location.area_name }}</p>
            <p>
              <small>{{ location.full_address }}</small>
            </p>
            <span
              [class]="
                location.is_active ? 'badge bg-success' : 'badge bg-secondary'
              "
            >
              {{ location.is_active ? 'Active' : 'Inactive' }}
            </span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class LocationsComponent implements OnInit {
  locations: Location[] = [];

  ngOnInit() {
    this.locations = getAllLocations();
  }
}
