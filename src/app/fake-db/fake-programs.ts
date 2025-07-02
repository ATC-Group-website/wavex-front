export interface Program {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  main_image: string;
  cover_image: string;
  is_active: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export const FAKE_PROGRAMS: Program[] = [
  {
    id: 1,
    name: 'WaveX Circuit',
    subtitle: 'High-intensity workout',
    description:
      'A high-intensity water workout combining strength, cardio, and balance to boost metabolism, build endurance, and enhance coordination.',
    main_image: '/images/programs/wavex-circuit-main.jpg',
    cover_image: '/images/programs/wavex-circuit-cover.jpg',
    is_active: true,
    sort_order: 1,
    created_at: '2024-01-10T09:00:00Z',
    updated_at: '2024-01-10T09:00:00Z',
  },
  {
    id: 2,
    name: 'WaveX Flow',
    subtitle: 'Mind-body connection',
    description:
      'A low-impact water workout blending yoga, pilates, and functional movement to improve flexibility, core strength, and mind-body balance.',
    main_image: '/images/programs/wavex-flow-main.jpg',
    cover_image: '/images/programs/wavex-flow-cover.jpg',
    is_active: true,
    sort_order: 2,
    created_at: '2024-01-10T09:30:00Z',
    updated_at: '2024-01-10T09:30:00Z',
  },
  {
    id: 3,
    name: 'WaveX Core',
    subtitle: 'Core strengthening focus',
    description:
      "A focused aquatic workout that targets abs, obliques, and lower back, using water's instability to sculpt the core, reduce back pain, and improve balance.",
    main_image: '/images/programs/wavex-core-main.jpg',
    cover_image: '/images/programs/wavex-core-cover.jpg',
    is_active: true,
    sort_order: 3,
    created_at: '2024-01-10T10:00:00Z',
    updated_at: '2024-01-10T10:00:00Z',
  },
  {
    id: 4,
    name: 'WaveX Kickbox',
    subtitle: 'High-energy combat training',
    description:
      'A high-energy aquatic workout blending kickboxing with floating platform drills to burn calories, build power, and sharpen reflexes.',
    main_image: '/images/programs/wavex-kickbox-main.jpg',
    cover_image: '/images/programs/wavex-kickbox-cover.jpg',
    is_active: true,
    sort_order: 4,
    created_at: '2024-01-10T10:30:00Z',
    updated_at: '2024-01-10T10:30:00Z',
  },
  {
    id: 5,
    name: 'WaveX Beginner',
    subtitle: 'Perfect for newcomers',
    description:
      'An introductory water-based fitness program designed for beginners to learn basic floating techniques and build confidence on the water.',
    main_image: '/images/programs/wavex-beginner-main.jpg',
    cover_image: '/images/programs/wavex-beginner-cover.jpg',
    is_active: true,
    sort_order: 5,
    created_at: '2024-01-10T11:00:00Z',
    updated_at: '2024-01-10T11:00:00Z',
  },
  {
    id: 6,
    name: 'WaveX Seniors',
    subtitle: 'Low-impact for seniors',
    description:
      'A gentle, low-impact water workout specifically designed for seniors to maintain mobility, strength, and balance in a safe environment.',
    main_image: '/images/programs/wavex-seniors-main.jpg',
    cover_image: '/images/programs/wavex-seniors-cover.jpg',
    is_active: false,
    sort_order: 6,
    created_at: '2024-01-10T11:30:00Z',
    updated_at: '2024-01-15T14:20:00Z',
  },
];

// Helper functions
export const getAllPrograms = (): Program[] => FAKE_PROGRAMS;

export const getProgramById = (id: number): Program | undefined =>
  FAKE_PROGRAMS.find((program) => program.id === id);

export const getActivePrograms = (): Program[] =>
  FAKE_PROGRAMS.filter((program) => program.is_active === true);

export const getProgramsByName = (searchTerm: string): Program[] =>
  FAKE_PROGRAMS.filter((program) =>
    program.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

export const getProgramsCount = (): number => FAKE_PROGRAMS.length;

export const getActiveProgramsCount = (): number =>
  FAKE_PROGRAMS.filter((program) => program.is_active === true).length;
