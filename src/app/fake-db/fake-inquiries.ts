export interface Inquiry {
  id: number;
  name: string;
  email: string;
  phone: string;
  country: string;
  message?: string;
  created_at: string;
  updated_at: string;
}

export const FAKE_INQUIRIES: Inquiry[] = [
  {
    id: 1,
    name: 'Mohamed Salah',
    email: 'mohamed.salah@gmail.com',
    phone: '+201123456789',
    country: 'Egypt',
    message:
      'I am interested in joining WaveX Circuit program. Can you provide more details about the schedule and pricing?',
    created_at: '2024-01-20T14:30:00Z',
    updated_at: '2024-01-20T14:30:00Z',
  },
  {
    id: 2,
    name: 'Layla Ahmed',
    email: 'layla.ahmed@gmail.com',
    phone: '+971501234567',
    country: 'UAE',
    message:
      'Hello, I would like to know if you have any beginner-friendly programs. I have never done aquatic fitness before.',
    created_at: '2024-01-21T10:15:00Z',
    updated_at: '2024-01-21T10:15:00Z',
  },
  {
    id: 3,
    name: 'Ahmad Al-Rashid',
    email: 'ahmad.rashid@gmail.com',
    phone: '+966512345678',
    country: 'Saudi Arabia',
    message:
      'Do you offer corporate packages for company wellness programs? We have about 50 employees interested.',
    created_at: '2024-01-22T09:45:00Z',
    updated_at: '2024-01-22T09:45:00Z',
  },
  {
    id: 4,
    name: 'Rana Khalil',
    email: 'rana.khalil@gmail.com',
    phone: '+201987654321',
    country: 'Egypt',
    message:
      'I have a back injury. Is WaveX Flow suitable for people with medical conditions?',
    created_at: '2024-01-23T16:20:00Z',
    updated_at: '2024-01-23T16:20:00Z',
  },
  {
    id: 5,
    name: 'Hassan Omar',
    email: 'hassan.omar@gmail.com',
    phone: '+201555666777',
    country: 'Egypt',
    message:
      'What are the age requirements for WaveX programs? Can teenagers participate?',
    created_at: '2024-01-24T11:30:00Z',
    updated_at: '2024-01-24T11:30:00Z',
  },
  {
    id: 6,
    name: 'Fatima Al-Zahra',
    email: 'fatima.zahra@gmail.com',
    phone: '+973123456789',
    country: 'Bahrain',
    message:
      'I am visiting Egypt next month. Do you offer short-term packages for tourists?',
    created_at: '2024-01-25T13:45:00Z',
    updated_at: '2024-01-25T13:45:00Z',
  },
  {
    id: 7,
    name: 'Omar Farouk',
    email: 'omar.farouk@gmail.com',
    phone: '+201444555666',
    country: 'Egypt',
    message: 'Can I get a trial session before committing to a full package?',
    created_at: '2024-01-26T08:15:00Z',
    updated_at: '2024-01-26T08:15:00Z',
  },
];

// Helper functions
export const getAllInquiries = (): Inquiry[] => FAKE_INQUIRIES;

export const getInquiryById = (id: number): Inquiry | undefined =>
  FAKE_INQUIRIES.find((inquiry) => inquiry.id === id);

export const getInquiriesByCountry = (country: string): Inquiry[] =>
  FAKE_INQUIRIES.filter(
    (inquiry) => inquiry.country.toLowerCase() === country.toLowerCase()
  );

export const getRecentInquiries = (days: number = 7): Inquiry[] => {
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - days);

  return FAKE_INQUIRIES.filter(
    (inquiry) => new Date(inquiry.created_at) >= cutoffDate
  );
};

export const getInquiriesCount = (): number => FAKE_INQUIRIES.length;

export const searchInquiries = (searchTerm: string): Inquiry[] =>
  FAKE_INQUIRIES.filter(
    (inquiry) =>
      inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.message?.toLowerCase().includes(searchTerm.toLowerCase())
  );
