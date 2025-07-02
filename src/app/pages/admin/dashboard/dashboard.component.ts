import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  getAllUsers,
  getAllPrograms,
  getAllSessions,
  getAllInquiries,
  getAllPackages,
  getActivePrograms,
  getUpcomingSessions,
  getUsersByStatus,
} from '../../../fake-db';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  stats = {
    totalUsers: 0,
    activeUsers: 0,
    totalPrograms: 0,
    activePrograms: 0,
    totalSessions: 0,
    upcomingSessions: 0,
    totalInquiries: 0,
    totalPackages: 0,
  };

  recentInquiries: any[] = [];
  upcomingSessionsList: any[] = [];

  ngOnInit() {
    this.loadDashboardData();
  }

  private loadDashboardData() {
    // Load statistics
    this.stats = {
      totalUsers: getAllUsers().length,
      activeUsers: getUsersByStatus(true).length,
      totalPrograms: getAllPrograms().length,
      activePrograms: getActivePrograms().length,
      totalSessions: getAllSessions().length,
      upcomingSessions: getUpcomingSessions().length,
      totalInquiries: getAllInquiries().length,
      totalPackages: getAllPackages().length,
    };

    // Load recent inquiries (last 5)
    this.recentInquiries = getAllInquiries().slice(-5).reverse();

    // Load upcoming sessions (next 5)
    this.upcomingSessionsList = getUpcomingSessions().slice(0, 5);
  }
}
