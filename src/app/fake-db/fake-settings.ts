export interface Setting {
  id: number;
  key: string;
  value?: string;
  page: string;
  type: 'text' | 'media';
  created_at: string;
  updated_at: string;
}

export const FAKE_SETTINGS: Setting[] = [
  {
    id: 1,
    key: 'site_name',
    value: 'WaveX Sport',
    page: 'general',
    type: 'text',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
  },
  {
    id: 2,
    key: 'site_description',
    value:
      'Transforming Fitness Through Water - Revolutionary aquatic fitness programs that combine strength, cardio, and mindfulness.',
    page: 'general',
    type: 'text',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-15T10:30:00Z',
  },
  {
    id: 3,
    key: 'contact_email',
    value: 'info@wavexsport.com',
    page: 'contact',
    type: 'text',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
  },
  {
    id: 4,
    key: 'contact_phone',
    value: '+20 1234567890',
    page: 'contact',
    type: 'text',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-10T14:20:00Z',
  },
  {
    id: 5,
    key: 'main_logo',
    value: '/images/logo.png',
    page: 'branding',
    type: 'media',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
  },
  {
    id: 6,
    key: 'hero_video',
    value: '/temp.mp4',
    page: 'homepage',
    type: 'media',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-25T16:45:00Z',
  },
  {
    id: 7,
    key: 'social_instagram',
    value: 'https://instagram.com/wavexsport',
    page: 'social',
    type: 'text',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
  },
  {
    id: 8,
    key: 'social_facebook',
    value: 'https://facebook.com/wavexsport',
    page: 'social',
    type: 'text',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
  },
  {
    id: 9,
    key: 'max_booking_advance_days',
    value: '30',
    page: 'booking',
    type: 'text',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
  },
  {
    id: 10,
    key: 'cancellation_hours_before',
    value: '24',
    page: 'booking',
    type: 'text',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
  },
];

export const getAllSettings = (): Setting[] => FAKE_SETTINGS;

export const getSettingById = (id: number): Setting | undefined =>
  FAKE_SETTINGS.find((setting) => setting.id === id);

export const getSettingByKey = (key: string): Setting | undefined =>
  FAKE_SETTINGS.find((setting) => setting.key === key);

export const getSettingsByPage = (page: string): Setting[] =>
  FAKE_SETTINGS.filter((setting) => setting.page === page);

export const getSettingsByType = (type: 'text' | 'media'): Setting[] =>
  FAKE_SETTINGS.filter((setting) => setting.type === type);
