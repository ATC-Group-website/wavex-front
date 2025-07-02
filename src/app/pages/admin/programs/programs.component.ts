import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getAllPrograms, Program } from '../../../fake-db';

@Component({
  selector: 'app-admin-programs',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>Programs Management</h2>
    <p>{{ programs.length }} programs found</p>`,
  styles: [],
})
export class AdminProgramsComponent implements OnInit {
  programs: Program[] = [];

  ngOnInit() {
    this.programs = getAllPrograms();
  }
}
