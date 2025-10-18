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
    thumbnail: '/thumbnails/single-family-home.jpg',
    tags: [
      { name: 'Suburban', icon: 'mdi:home-group' },
      { name: 'Private', icon: 'mdi:lock' }
    ]
  },
  {
    name: 'Apartment',
    category: 'Residential',
    thumbnail: '/thumbnails/apartment.jpg',
    tags: [
      { name: 'Urban', icon: 'mdi:city' },
      { name: 'Compact', icon: 'mdi:domain' }
    ]
  },
  {
    name: 'Dormitory',
    category: 'Residential',
    thumbnail: '/thumbnails/dormitory.jpg',
    tags: [
      { name: 'Shared', icon: 'mdi:account-group' },
      { name: 'Student', icon: 'mdi:school' }
    ]
  },
  {
    name: 'Hotel',
    category: 'Residential',
    thumbnail: '/thumbnails/hotel.jpg',
    tags: [
      { name: 'Hospitality', icon: 'mdi:briefcase-account' },
      { name: 'Suites', icon: 'mdi:bed-king' }
    ]
  },
  {
    name: 'Corporate Office',
    category: 'Commercial',
    thumbnail: '/thumbnails/corporate-office.jpg',
    tags: [
      { name: 'Workspace', icon: 'mdi:office-building' },
      { name: 'Open Plan', icon: 'mdi:view-grid' }
    ]
  },
  {
    name: 'Hospital',
    category: 'Commercial',
    thumbnail: '/thumbnails/hospital.jpg',
    tags: [
      { name: 'Healthcare', icon: 'mdi:hospital' },
      { name: 'Critical', icon: 'mdi:alert-circle' }
    ]
  },
  {
    name: 'Restaurant',
    category: 'Commercial',
    thumbnail: '/thumbnails/restaurant.jpg',
    tags: [
      { name: 'Dining', icon: 'mdi:silverware-fork-knife' },
      { name: 'Service', icon: 'mdi:account-tie' }
    ]
  },
  {
    name: 'TV Studio',
    category: 'Commercial',
    thumbnail: '/thumbnails/tv-studio.jpg',
    tags: [
      { name: 'Media', icon: 'mdi:television-classic' },
      { name: 'Lighting', icon: 'mdi:spotlight' }
    ]
  },
  {
    name: 'Car Factory',
    category: 'Industrial',
    thumbnail: '/thumbnails/car-factory.jpg',
    tags: [
      { name: 'Automation', icon: 'mdi:robot-industrial' },
      { name: 'Assembly', icon: 'mdi:cogs' }
    ]
  },
  {
    name: 'Power Plant',
    category: 'Industrial',
    thumbnail: '/thumbnails/power-plant.jpg',
    tags: [
      { name: 'Energy', icon: 'mdi:flash' },
      { name: 'Infrastructure', icon: 'mdi:transmission-tower' }
    ]
  },
  {
    name: 'Warehouse',
    category: 'Industrial',
    thumbnail: '/thumbnails/warehouse.jpg',
    tags: [
      { name: 'Storage', icon: 'mdi:package-variant' },
      { name: 'Logistics', icon: 'mdi:warehouse' }
    ]
  },
  {
    name: 'Hypermarket',
    category: 'Industrial',
    thumbnail: '/thumbnails/hypermarket.jpg',
    tags: [
      { name: 'Retail', icon: 'mdi:cart' },
      { name: 'High Traffic', icon: 'mdi:walk' }
    ]
  },
  {
    name: 'Kindergarten',
    category: 'Educational',
    thumbnail: '/thumbnails/kindergarten.jpg',
    tags: [
      { name: 'Classrooms', icon: 'mdi:school' },
      { name: 'Playground', icon: 'mdi:slide' }
    ]
  },
  {
    name: 'University Building',
    category: 'Educational',
    thumbnail: '/thumbnails/university.jpg',
    tags: [
      { name: 'Research', icon: 'mdi:magnify' },
      { name: 'Lecture Halls', icon: 'mdi:presentation' }
    ]
  },
  {
    name: 'Public Library',
    category: 'Educational',
    thumbnail: '/thumbnails/public-library.jpg',
    tags: [
      { name: 'Knowledge', icon: 'mdi:book-open-variant' },
      { name: 'Quiet', icon: 'mdi:volume-off' }
    ]
  },
  {
    name: 'Music Room',
    category: 'Educational',
    thumbnail: '/thumbnails/music-room.jpg',
    tags: [
      { name: 'Music', icon: 'mdi:music' },
      { name: 'Performance', icon: 'mdi:drama-masks' }
    ]
  }
];
