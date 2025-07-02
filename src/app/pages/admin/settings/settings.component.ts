import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getAllSettings, Setting } from '../../../fake-db';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>System Settings</h2>
    <div class="row">
      <div class="col-lg-6" *ngFor="let setting of settings">
        <div class="card mb-3">
          <div class="card-body">
            <h6>{{ setting.key }}</h6>
            <p class="text-muted">{{ setting.value }}</p>
            <small class="text-info"
              >{{ setting.page }} | {{ setting.type }}</small
            >
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class SettingsComponent implements OnInit {
  settings: Setting[] = [];

  ngOnInit() {
    this.settings = getAllSettings();
  }
}
