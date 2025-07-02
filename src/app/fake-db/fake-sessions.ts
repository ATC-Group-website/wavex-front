export interface Session {
  id: number;
  program_id: number;
  location_id: number;
  session_date: string;
  start_time: string;
  end_time: string;
  max_capacity: number;
  current_bookings: number;
  status: 'scheduled' | 'cancelled' | 'completed';
  created_at: string;
  updated_at: string;
}

export const FAKE_SESSIONS: Session[] = [
  {
    id: 1,
    program_id: 1, // WaveX Circuit
    location_id: 1,
    session_date: '2024-02-01',
    start_time: '09:00',
    end_time: '10:00',
    max_capacity: 12,
    current_bookings: 8,
    status: 'scheduled',
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-01-15T10:00:00Z',
  },
  {
    id: 2,
    program_id: 2, // WaveX Flow
    location_id: 1,
    session_date: '2024-02-01',
    start_time: '10:30',
    end_time: '11:30',
    max_capacity: 10,
    current_bookings: 6,
    status: 'scheduled',
    created_at: '2024-01-15T10:30:00Z',
    updated_at: '2024-01-15T10:30:00Z',
  },
  {
    id: 3,
    program_id: 3, // WaveX Core
    location_id: 2,
    session_date: '2024-02-01',
    start_time: '18:00',
    end_time: '19:00',
    max_capacity: 8,
    current_bookings: 8,
    status: 'scheduled',
    created_at: '2024-01-15T11:00:00Z',
    updated_at: '2024-01-28T14:20:00Z',
  },
  {
    id: 4,
    program_id: 4, // WaveX Kickbox
    location_id: 1,
    session_date: '2024-02-02',
    start_time: '19:00',
    end_time: '20:00',
    max_capacity: 15,
    current_bookings: 12,
    status: 'scheduled',
    created_at: '2024-01-15T11:30:00Z',
    updated_at: '2024-01-15T11:30:00Z',
  },
  {
    id: 5,
    program_id: 1, // WaveX Circuit
    location_id: 2,
    session_date: '2024-02-02',
    start_time: '08:00',
    end_time: '09:00',
    max_capacity: 12,
    current_bookings: 5,
    status: 'scheduled',
    created_at: '2024-01-16T09:00:00Z',
    updated_at: '2024-01-16T09:00:00Z',
  },
  {
    id: 6,
    program_id: 2, // WaveX Flow
    location_id: 3,
    session_date: '2024-01-30',
    start_time: '17:00',
    end_time: '18:00',
    max_capacity: 10,
    current_bookings: 9,
    status: 'completed',
    created_at: '2024-01-16T09:30:00Z',
    updated_at: '2024-01-30T18:30:00Z',
  },
  {
    id: 7,
    program_id: 3, // WaveX Core
    location_id: 1,
    session_date: '2024-01-29',
    start_time: '20:00',
    end_time: '21:00',
    max_capacity: 8,
    current_bookings: 3,
    status: 'cancelled',
    created_at: '2024-01-16T10:00:00Z',
    updated_at: '2024-01-29T16:00:00Z',
  },
  {
    id: 8,
    program_id: 5, // WaveX Beginner
    location_id: 1,
    session_date: '2024-02-03',
    start_time: '16:00',
    end_time: '17:00',
    max_capacity: 6,
    current_bookings: 4,
    status: 'scheduled',
    created_at: '2024-01-16T10:30:00Z',
    updated_at: '2024-01-16T10:30:00Z',
  },
];

// Helper functions
export const getAllSessions = (): Session[] => FAKE_SESSIONS;

export const getSessionById = (id: number): Session | undefined =>
  FAKE_SESSIONS.find((session) => session.id === id);

export const getSessionsByProgram = (programId: number): Session[] =>
  FAKE_SESSIONS.filter((session) => session.program_id === programId);

export const getSessionsByLocation = (locationId: number): Session[] =>
  FAKE_SESSIONS.filter((session) => session.location_id === locationId);

export const getSessionsByStatus = (
  status: 'scheduled' | 'cancelled' | 'completed'
): Session[] => FAKE_SESSIONS.filter((session) => session.status === status);

export const getSessionsByDate = (date: string): Session[] =>
  FAKE_SESSIONS.filter((session) => session.session_date === date);

export const getUpcomingSessions = (): Session[] => {
  const today = new Date().toISOString().split('T')[0];
  return FAKE_SESSIONS.filter(
    (session) => session.session_date >= today && session.status === 'scheduled'
  );
};

export const getSessionsCount = (): number => FAKE_SESSIONS.length;

export const getAvailableSpots = (sessionId: number): number => {
  const session = getSessionById(sessionId);
  return session ? session.max_capacity - session.current_bookings : 0;
};
