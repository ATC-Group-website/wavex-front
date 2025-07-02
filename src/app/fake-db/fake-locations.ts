export interface Location {
  id: number;
  area_name: string;
  venue_name: string;
  full_address?: string;
  longitude?: string;
  latitude?: string;
  phone?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export const FAKE_LOCATIONS: Location[] = [
  {
    id: 1,
    area_name: 'New Cairo',
    venue_name: 'NewGiza Sports Club',
    full_address: 'NewGiza, Sheikh Zayed City, Giza Governorate, Egypt',
    longitude: '31.0092',
    latitude: '30.0131',
    phone: '+20233856500',
    is_active: true,
    created_at: '2024-01-05T10:00:00Z',
    updated_at: '2024-01-05T10:00:00Z',
  },
  {
    id: 2,
    area_name: 'Zamalek',
    venue_name: 'Gezira Club',
    full_address: '1 Sharia al-Gezira al-Wusta, Zamalek, Cairo, Egypt',
    longitude: '31.2272',
    latitude: '30.0626',
    phone: '+20227359000',
    is_active: true,
    created_at: '2024-01-05T10:30:00Z',
    updated_at: '2024-01-05T10:30:00Z',
  },
  {
    id: 3,
    area_name: 'Sahel',
    venue_name: 'LA7 Aeon Resort',
    full_address: 'North Coast, Sidi Abdel Rahman, Matrouh Governorate, Egypt',
    longitude: '28.7217',
    latitude: '30.8614',
    phone: '+20466920000',
    is_active: true,
    created_at: '2024-01-05T11:00:00Z',
    updated_at: '2024-01-05T11:00:00Z',
  },
  {
    id: 4,
    area_name: 'Maadi',
    venue_name: 'Maadi Club',
    full_address: 'Corniche El Maadi, Maadi, Cairo, Egypt',
    longitude: '31.2590',
    latitude: '29.9602',
    phone: '+20225162000',
    is_active: true,
    created_at: '2024-01-05T11:30:00Z',
    updated_at: '2024-01-05T11:30:00Z',
  },
  {
    id: 5,
    area_name: 'Heliopolis',
    venue_name: 'Heliopolis Club',
    full_address: 'Ibrahim Al Laqqany St., Heliopolis, Cairo, Egypt',
    longitude: '31.3207',
    latitude: '30.0883',
    phone: '+20224144000',
    is_active: false,
    created_at: '2024-01-05T12:00:00Z',
    updated_at: '2024-01-20T15:30:00Z',
  },
];

export const getAllLocations = (): Location[] => FAKE_LOCATIONS;

export const getLocationById = (id: number): Location | undefined =>
  FAKE_LOCATIONS.find((location) => location.id === id);

export const getActiveLocations = (): Location[] =>
  FAKE_LOCATIONS.filter((location) => location.is_active === true);

export const getLocationsByArea = (area: string): Location[] =>
  FAKE_LOCATIONS.filter((location) =>
    location.area_name.toLowerCase().includes(area.toLowerCase())
  );
