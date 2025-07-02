import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getAllUsers, getUsersByStatus, User } from '../../../fake-db';

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  searchTerm: string = '';
  statusFilter: string = 'all';

  ngOnInit() {
    this.loadUsers();
  }

  private loadUsers() {
    this.users = getAllUsers();
    this.applyFilters();
  }

  onSearchChange(event: any) {
    this.searchTerm = event.target.value;
    this.applyFilters();
  }

  onStatusChange(status: string) {
    this.statusFilter = status;
    this.applyFilters();
  }

  private applyFilters() {
    let filtered = this.users;

    // Filter by status
    if (this.statusFilter === 'active') {
      filtered = getUsersByStatus(true);
    } else if (this.statusFilter === 'inactive') {
      filtered = getUsersByStatus(false);
    }

    // Filter by search term
    if (this.searchTerm) {
      filtered = filtered.filter(
        (user) =>
          user.first_name
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase()) ||
          user.last_name
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    this.filteredUsers = filtered;
  }

  getStatusBadgeClass(isActive: boolean): string {
    return isActive ? 'badge bg-success' : 'badge bg-secondary';
  }

  getGenderIcon(gender: string): string {
    switch (gender) {
      case 'male':
        return 'fas fa-mars text-primary';
      case 'female':
        return 'fas fa-venus text-danger';
      default:
        return 'fas fa-genderless text-info';
    }
  }
}
