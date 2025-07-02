export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  date_of_birth?: string;
  gender: 'male' | 'female' | 'other';
  medical_conditions?: string | null;
  email_verified_at?: string | null;
  password: string;
  image?: string | null;
  is_active: boolean;
  is_admin: boolean;
  device_token: string;
  created_at: string;
  updated_at: string;
}

export const FAKE_USERS: User[] = [
  {
    id: 1,
    first_name: 'Ahmed',
    last_name: 'Hassan',
    email: 'ahmed.hassan@gmail.com',
    phone: '+201234567890',
    date_of_birth: '1990-05-15',
    gender: 'male',
    medical_conditions: 'None',
    email_verified_at: '2024-01-15T10:30:00Z',
    password: 'hashed_password_123',
    image: '/images/users/ahmed.jpg',
    is_active: true,
    is_admin: false,
    device_token: 'FCM_TOKEN_12345',
    created_at: '2024-01-15T10:30:00Z',
    updated_at: '2024-01-15T10:30:00Z',
  },
  {
    id: 2,
    first_name: 'Sarah',
    last_name: 'Mohamed',
    email: 'sarah.mohamed@gmail.com',
    phone: '+201987654321',
    date_of_birth: '1988-03-22',
    gender: 'female',
    medical_conditions: 'Mild back pain',
    email_verified_at: '2024-01-16T09:15:00Z',
    password: 'hashed_password_456',
    image: '/images/users/sarah.jpg',
    is_active: true,
    is_admin: false,
    device_token: 'FCM_TOKEN_67890',
    created_at: '2024-01-16T09:15:00Z',
    updated_at: '2024-01-16T09:15:00Z',
  },
  {
    id: 3,
    first_name: 'Omar',
    last_name: 'Ali',
    email: 'omar.ali@gmail.com',
    phone: '+201555666777',
    date_of_birth: '1992-11-08',
    gender: 'male',
    medical_conditions: null,
    email_verified_at: '2024-01-17T14:20:00Z',
    password: 'hashed_password_789',
    image: null,
    is_active: true,
    is_admin: false,
    device_token: 'FCM_TOKEN_11111',
    created_at: '2024-01-17T14:20:00Z',
    updated_at: '2024-01-17T14:20:00Z',
  },
  {
    id: 4,
    first_name: 'Fatima',
    last_name: 'Ibrahim',
    email: 'fatima.ibrahim@gmail.com',
    phone: '+201777888999',
    date_of_birth: '1985-07-12',
    gender: 'female',
    medical_conditions: 'Knee injury (recovered)',
    email_verified_at: '2024-01-18T11:45:00Z',
    password: 'hashed_password_101',
    image: '/images/users/fatima.jpg',
    is_active: false,
    is_admin: false,
    device_token: 'FCM_TOKEN_22222',
    created_at: '2024-01-18T11:45:00Z',
    updated_at: '2024-01-18T11:45:00Z',
  },
  {
    id: 5,
    first_name: 'Khaled',
    last_name: 'Mahmoud',
    email: 'khaled.mahmoud@gmail.com',
    phone: '+201444555666',
    date_of_birth: '1995-02-28',
    gender: 'male',
    medical_conditions: null,
    email_verified_at: '2024-01-19T16:30:00Z',
    password: 'hashed_password_112',
    image: '/images/users/khaled.jpg',
    is_active: true,
    is_admin: false,
    device_token: 'FCM_TOKEN_33333',
    created_at: '2024-01-19T16:30:00Z',
    updated_at: '2024-01-19T16:30:00Z',
  },
  {
    id: 6,
    first_name: 'Nour',
    last_name: 'Adel',
    email: 'nour.adel@gmail.com',
    phone: '+201333444555',
    date_of_birth: '1993-09-14',
    gender: 'female',
    medical_conditions: 'Asthma (mild)',
    email_verified_at: '2024-01-20T08:15:00Z',
    password: 'hashed_password_131',
    image: null,
    is_active: true,
    is_admin: false,
    device_token: 'FCM_TOKEN_44444',
    created_at: '2024-01-20T08:15:00Z',
    updated_at: '2024-01-20T08:15:00Z',
  },
  {
    id: 7,
    first_name: 'Youssef',
    last_name: 'Farid',
    email: 'youssef.farid@gmail.com',
    phone: '+201666777888',
    date_of_birth: '1987-12-03',
    gender: 'male',
    medical_conditions: 'High blood pressure',
    email_verified_at: '2024-01-21T13:00:00Z',
    password: 'hashed_password_151',
    image: '/images/users/youssef.jpg',
    is_active: true,
    is_admin: false,
    device_token: 'FCM_TOKEN_55555',
    created_at: '2024-01-21T13:00:00Z',
    updated_at: '2024-01-21T13:00:00Z',
  },
  {
    id: 8,
    first_name: 'Menna',
    last_name: 'Tarek',
    email: 'menna.tarek@gmail.com',
    phone: '+201888999000',
    date_of_birth: '1991-06-25',
    gender: 'female',
    medical_conditions: null,
    email_verified_at: '2024-01-22T10:45:00Z',
    password: 'hashed_password_171',
    image: '/images/users/menna.jpg',
    is_active: true,
    is_admin: false,
    device_token: 'FCM_TOKEN_66666',
    created_at: '2024-01-22T10:45:00Z',
    updated_at: '2024-01-22T10:45:00Z',
  },
];

// Helper functions
export const getAllUsers = (): User[] => FAKE_USERS;

export const getUserById = (id: number): User | undefined =>
  FAKE_USERS.find((user) => user.id === id);

export const getUsersByStatus = (isActive: boolean): User[] =>
  FAKE_USERS.filter((user) => user.is_active === isActive);

export const getAdminUsers = (): User[] =>
  FAKE_USERS.filter((user) => user.is_admin === true);

export const getUsersCount = (): number => FAKE_USERS.length;

export const getActiveUsersCount = (): number =>
  FAKE_USERS.filter((user) => user.is_active === true).length;
