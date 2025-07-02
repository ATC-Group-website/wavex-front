export interface Package {
  id: number;
  name: string;
  description: string;
  sessions_included: number;
  price: number;
  validity_days?: number;
  is_active: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export const FAKE_PACKAGES: Package[] = [
  {
    id: 1,
    name: 'Starter Pack',
    description:
      'Perfect for beginners who want to try WaveX with a small commitment. Includes access to all beginner-friendly programs.',
    sessions_included: 4,
    price: 320.0,
    validity_days: 30,
    is_active: true,
    sort_order: 1,
    created_at: '2024-01-10T08:00:00Z',
    updated_at: '2024-01-10T08:00:00Z',
  },
  {
    id: 2,
    name: 'Monthly Essential',
    description:
      'Our most popular package! Perfect for regular practitioners who want to maintain their fitness routine.',
    sessions_included: 8,
    price: 600.0,
    validity_days: 45,
    is_active: true,
    sort_order: 2,
    created_at: '2024-01-10T08:30:00Z',
    updated_at: '2024-01-10T08:30:00Z',
  },
  {
    id: 3,
    name: 'Power Pack',
    description:
      'For serious fitness enthusiasts who want maximum flexibility and value. Access to all programs and priority booking.',
    sessions_included: 16,
    price: 1120.0,
    validity_days: 60,
    is_active: true,
    sort_order: 3,
    created_at: '2024-01-10T09:00:00Z',
    updated_at: '2024-01-10T09:00:00Z',
  },
  {
    id: 4,
    name: 'Unlimited Monthly',
    description:
      'Unlimited access to all WaveX programs for 30 days. Perfect for fitness enthusiasts who want to train daily.',
    sessions_included: 999, // Represents unlimited
    price: 1500.0,
    validity_days: 30,
    is_active: true,
    sort_order: 4,
    created_at: '2024-01-10T09:30:00Z',
    updated_at: '2024-01-10T09:30:00Z',
  },
  {
    id: 5,
    name: 'Corporate Wellness',
    description:
      'Special package designed for corporate wellness programs. Includes team building sessions and nutrition guidance.',
    sessions_included: 20,
    price: 1800.0,
    validity_days: 90,
    is_active: true,
    sort_order: 5,
    created_at: '2024-01-10T10:00:00Z',
    updated_at: '2024-01-10T10:00:00Z',
  },
  {
    id: 6,
    name: 'Student Special',
    description:
      'Discounted package for students with valid ID. Limited sessions but great value for money.',
    sessions_included: 6,
    price: 400.0,
    validity_days: 60,
    is_active: false, // Currently inactive
    sort_order: 6,
    created_at: '2024-01-10T10:30:00Z',
    updated_at: '2024-01-20T14:15:00Z',
  },
  {
    id: 7,
    name: 'Trial Session',
    description:
      'Single session to try WaveX programs before committing to a larger package.',
    sessions_included: 1,
    price: 100.0,
    validity_days: 7,
    is_active: true,
    sort_order: 0, // First in order
    created_at: '2024-01-10T11:00:00Z',
    updated_at: '2024-01-10T11:00:00Z',
  },
];

// Helper functions
export const getAllPackages = (): Package[] => FAKE_PACKAGES;

export const getPackageById = (id: number): Package | undefined =>
  FAKE_PACKAGES.find((pkg) => pkg.id === id);

export const getActivePackages = (): Package[] =>
  FAKE_PACKAGES.filter((pkg) => pkg.is_active === true).sort(
    (a, b) => a.sort_order - b.sort_order
  );

export const getPackagesByPriceRange = (
  minPrice: number,
  maxPrice: number
): Package[] =>
  FAKE_PACKAGES.filter((pkg) => pkg.price >= minPrice && pkg.price <= maxPrice);

export const getPopularPackages = (): Package[] =>
  FAKE_PACKAGES.filter(
    (pkg) =>
      pkg.is_active && pkg.sessions_included >= 8 && pkg.sessions_included <= 16
  );

export const getPackagesCount = (): number => FAKE_PACKAGES.length;

export const getActivePackagesCount = (): number =>
  FAKE_PACKAGES.filter((pkg) => pkg.is_active === true).length;

export const calculatePackageValue = (packageId: number): number => {
  const pkg = getPackageById(packageId);
  if (!pkg) return 0;

  const pricePerSession = pkg.price / pkg.sessions_included;
  return Math.round(pricePerSession * 100) / 100; // Round to 2 decimal places
};
