export type ExampleTag = {
  name: string;
  icon: string;
};

export type ExampleCategory = {
  name: string;
  thumbnail: string;
  tags: ExampleTag[];
};

export type ExampleScene = {
  name: string;
  category: ExampleCategory['name'];
  thumbnail: string;
  tags: ExampleTag[];
};

export const exampleCategories: ExampleCategory[] = [
  {
    name: 'Residential',
    thumbnail: '/thumbnails/residential.jpg',
    tags: [
      { name: 'Living Spaces', icon: 'mdi:home' },
      { name: 'Comfort', icon: 'mdi:sofa' }
    ]
  },
  {
    name: 'Commercial',
    thumbnail: '/thumbnails/commercial.jpg',
    tags: [
      { name: 'Business', icon: 'mdi:briefcase' },
      { name: 'Hospitality', icon: 'mdi:silverware-fork-knife' }
    ]
  },
  {
    name: 'Industrial',
    thumbnail: '/thumbnails/industrial.jpg',
    tags: [
      { name: 'Production', icon: 'mdi:factory' },
      { name: 'Logistics', icon: 'mdi:warehouse' }
    ]
  },
  {
    name: 'Educational',
    thumbnail: '/thumbnails/educational.jpg',
    tags: [
      { name: 'Learning', icon: 'mdi:school' },
      { name: 'Community', icon: 'mdi:account-group' }
    ]
  }
];

export const exampleScenes: ExampleScene[] = [
  {
    name: 'Single Family Home',
    category: 'Residential',
    thumbnail: '/placeholder.jpg',
    tags: [
      { name: 'Suburban', icon: 'mdi:home-group' },
      { name: 'Private', icon: 'mdi:lock' }
    ]
  },
  {
    name: 'Apartment',
    category: 'Residential',
    thumbnail: '/placeholder.jpg',
    tags: [
      { name: 'Urban', icon: 'mdi:city' },
      { name: 'Compact', icon: 'mdi:domain' }
    ]
  },
  {
    name: 'Dormitory',
    category: 'Residential',
    thumbnail: '/placeholder.jpg',
    tags: [
      { name: 'Shared', icon: 'mdi:account-group' },
      { name: 'Student', icon: 'mdi:school' }
    ]
  },
  {
    name: 'Hotel',
    category: 'Residential',
    thumbnail: '/placeholder.jpg',
    tags: [
      { name: 'Hospitality', icon: 'mdi:briefcase-account' },
      { name: 'Suites', icon: 'mdi:bed-king' }
    ]
  },
  {
    name: 'Corporate Office',
    category: 'Commercial',
    thumbnail: '/placeholder.jpg',
    tags: [
      { name: 'Workspace', icon: 'mdi:office-building' },
      { name: 'Open Plan', icon: 'mdi:view-grid' }
    ]
  },
  {
    name: 'Hospital',
    category: 'Commercial',
    thumbnail: '/placeholder.jpg',
    tags: [
      { name: 'Healthcare', icon: 'mdi:hospital' },
      { name: 'Critical', icon: 'mdi:alert-circle' }
    ]
  },
  {
    name: 'Restaurant',
    category: 'Commercial',
    thumbnail: '/placeholder.jpg',
    tags: [
      { name: 'Dining', icon: 'mdi:silverware-fork-knife' },
      { name: 'Service', icon: 'mdi:account-tie' }
    ]
  },
  {
    name: 'TV Studio',
    category: 'Commercial',
    thumbnail: '/placeholder.jpg',
    tags: [
      { name: 'Media', icon: 'mdi:television-classic' },
      { name: 'Lighting', icon: 'mdi:spotlight' }
    ]
  },
  {
    name: 'Car Factory',
    category: 'Industrial',
    thumbnail: '/placeholder.jpg',
    tags: [
      { name: 'Automation', icon: 'mdi:robot-industrial' },
      { name: 'Assembly', icon: 'mdi:cogs' }
    ]
  },
  {
    name: 'Power Plant',
    category: 'Industrial',
    thumbnail: '/placeholder.jpg',
    tags: [
      { name: 'Energy', icon: 'mdi:flash' },
      { name: 'Infrastructure', icon: 'mdi:transmission-tower' }
    ]
  },
  {
    name: 'Warehouse',
    category: 'Industrial',
    thumbnail: '/placeholder.jpg',
    tags: [
      { name: 'Storage', icon: 'mdi:package-variant' },
      { name: 'Logistics', icon: 'mdi:warehouse' }
    ]
  },
  {
    name: 'Hypermarket',
    category: 'Industrial',
    thumbnail: '/placeholder.jpg',
    tags: [
      { name: 'Retail', icon: 'mdi:cart' },
      { name: 'High Traffic', icon: 'mdi:walk' }
    ]
  },
  {
    name: 'Elementary School',
    category: 'Educational',
    thumbnail: '/placeholder.jpg',
    tags: [
      { name: 'Classrooms', icon: 'mdi:school' },
      { name: 'Playground', icon: 'mdi:slide' }
    ]
  },
  {
    name: 'University Building',
    category: 'Educational',
    thumbnail: '/placeholder.jpg',
    tags: [
      { name: 'Research', icon: 'mdi:magnify' },
      { name: 'Lecture Halls', icon: 'mdi:presentation' }
    ]
  },
  {
    name: 'Public Library',
    category: 'Educational',
    thumbnail: '/placeholder.jpg',
    tags: [
      { name: 'Knowledge', icon: 'mdi:book-open-variant' },
      { name: 'Quiet', icon: 'mdi:volume-off' }
    ]
  },
  {
    name: 'Conservatory',
    category: 'Educational',
    thumbnail: '/placeholder.jpg',
    tags: [
      { name: 'Music', icon: 'mdi:music' },
      { name: 'Performance', icon: 'mdi:drama-masks' }
    ]
  }
];
