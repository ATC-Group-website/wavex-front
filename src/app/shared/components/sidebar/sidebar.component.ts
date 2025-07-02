import { Component, inject } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

interface NavItem {
  path: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  offcanvasId = 'adminSidebar';

  navItems: NavItem[] = [
    {
      path: '/admin/dashboard',
      label: 'Dashboard',
      icon: 'fas fa-chart-line',
    },
    {
      path: '/admin/sessions',
      label: 'Sessions',
      icon: 'fas fa-calendar-alt',
    },
    {
      path: '/admin/programs',
      label: 'Programs',
      icon: 'fas fa-dumbbell',
    },
    {
      path: '/admin/locations',
      label: 'Locations',
      icon: 'fas fa-map-marker-alt',
    },
    {
      path: '/admin/packages',
      label: 'Packages',
      icon: 'fas fa-box',
    },
    {
      path: '/admin/user-packages',
      label: 'User Packages',
      icon: 'fas fa-user-tag',
    },
    {
      path: '/admin/users',
      label: 'Users',
      icon: 'fas fa-users',
    },
    {
      path: '/admin/inquiries',
      label: 'Inquiries',
      icon: 'fas fa-envelope',
    },
    {
      path: '/admin/notifications',
      label: 'Notifications',
      icon: 'fas fa-bell',
    },
    {
      path: '/admin/settings',
      label: 'Settings',
      icon: 'fas fa-cog',
    },
    {
      path: '/admin/admins',
      label: 'Admin Accounts',
      icon: 'fas fa-user-shield',
    },
  ];

  private router = inject(Router);

  isActiveRoute(path: string): boolean {
    return this.router.url === path;
  }

  closeOffcanvas() {
    // Close Bootstrap offcanvas on mobile
    const offcanvasElement = document.getElementById(this.offcanvasId);
    if (offcanvasElement) {
      const bsOffcanvas = (window as any).bootstrap?.Offcanvas?.getInstance(
        offcanvasElement
      );
      if (bsOffcanvas) {
        bsOffcanvas.hide();
      }
    }
  }

  logout() {
    // Close offcanvas before logout on mobile
    this.closeOffcanvas();
    // TODO: Implement logout logic
    console.log('Logout clicked');
    this.router.navigate(['/']);
  }
}
