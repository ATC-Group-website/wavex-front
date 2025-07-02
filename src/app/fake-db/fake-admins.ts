export interface Admin {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  role: 'super_admin' | 'admin' | 'manager';
  permissions: string[];
  last_login?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export const FAKE_ADMINS: Admin[] = [
  {
    id: 1,
    first_name: 'Ahmed',
    last_name: 'Mansour',
    email: 'ahmed.mansour@wavexsport.com',
    phone: '+201234567890',
    role: 'super_admin',
    permissions: ['*'], // All permissions
    last_login: '2024-01-29T09:30:00Z',
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-29T09:30:00Z',
  },
  {
    id: 2,
    first_name: 'Sarah',
    last_name: 'El-Sherbiny',
    email: 'sarah.elsherbiny@wavexsport.com',
    phone: '+201987654321',
    role: 'admin',
    permissions: [
      'users.read',
      'users.write',
      'programs.read',
      'programs.write',
      'sessions.read',
      'sessions.write',
      'bookings.read',
    ],
    last_login: '2024-01-28T14:20:00Z',
    is_active: true,
    created_at: '2024-01-02T10:00:00Z',
    updated_at: '2024-01-28T14:20:00Z',
  },
  {
    id: 3,
    first_name: 'Omar',
    last_name: 'Farouk',
    email: 'omar.farouk@wavexsport.com',
    phone: '+201555666777',
    role: 'manager',
    permissions: [
      'sessions.read',
      'sessions.write',
      'bookings.read',
      'users.read',
      'inquiries.read',
    ],
    last_login: '2024-01-29T08:15:00Z',
    is_active: true,
    created_at: '2024-01-03T11:30:00Z',
    updated_at: '2024-01-29T08:15:00Z',
  },
  {
    id: 4,
    first_name: 'Menna',
    last_name: 'Khalil',
    email: 'menna.khalil@wavexsport.com',
    phone: '+201777888999',
    role: 'admin',
    permissions: [
      'programs.read',
      'locations.read',
      'locations.write',
      'packages.read',
      'packages.write',
    ],
    last_login: '2024-01-27T16:45:00Z',
    is_active: true,
    created_at: '2024-01-04T09:00:00Z',
    updated_at: '2024-01-27T16:45:00Z',
  },
  {
    id: 5,
    first_name: 'Youssef',
    last_name: 'Ahmed',
    email: 'youssef.ahmed@wavexsport.com',
    phone: '+201444555666',
    role: 'manager',
    permissions: ['inquiries.read', 'inquiries.write', 'users.read'],
    last_login: '2024-01-20T11:30:00Z',
    is_active: false,
    created_at: '2024-01-05T12:00:00Z',
    updated_at: '2024-01-25T10:15:00Z',
  },
];

export const getAllAdmins = (): Admin[] => FAKE_ADMINS;

export const getAdminById = (id: number): Admin | undefined =>
  FAKE_ADMINS.find((admin) => admin.id === id);

export const getActiveAdmins = (): Admin[] =>
  FAKE_ADMINS.filter((admin) => admin.is_active === true);

export const getAdminsByRole = (
  role: 'super_admin' | 'admin' | 'manager'
): Admin[] => FAKE_ADMINS.filter((admin) => admin.role === role);

export const getAdminsCount = (): number => FAKE_ADMINS.length;

export const hasPermission = (adminId: number, permission: string): boolean => {
  const admin = getAdminById(adminId);
  if (!admin) return false;

  return (
    admin.permissions.includes('*') || admin.permissions.includes(permission)
  );
};
