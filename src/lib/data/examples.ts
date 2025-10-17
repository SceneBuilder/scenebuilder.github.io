export type ExampleTag = {
  name: string;
  icon: string;
};

export type Example = {
  name: string;
  thumbnail: string;
  tags: ExampleTag[];
};

export const projectExamples: Example[] = [
  {
    name: 'Residential',
    thumbnail: '/scenes/single_room/classroom.glb',
    tags: [
      { name: 'Indoor', icon: 'mdi:home' },
      { name: '3D Scene', icon: 'mdi:cube-outline' }
    ]
  },
  {
    name: 'Commercial',
    thumbnail: '/scenes/single_room/bar.glb',
    tags: [
      { name: 'Indoor', icon: 'mdi:home' },
      { name: '3D Scene', icon: 'mdi:cube-outline' }
    ]
  },
  {
    name: 'Industrial',
    thumbnail: '/placeholder.jpg',
    tags: [
      { name: 'Indoor', icon: 'mdi:home' },
      { name: 'Study', icon: 'mdi:book' }
    ]
  },
  {
    name: 'Educational',
    thumbnail: '/placeholder.jpg',
    tags: [
      { name: 'Indoor', icon: 'mdi:home' },
      { name: 'Cooking', icon: 'mdi:chef-hat' }
    ]
  }
];

export const additionalExamples: Example[] = [
  {
    name: 'Office',
    thumbnail: '/placeholder.jpg',
    tags: [
      { name: 'Workspace', icon: 'mdi:office-building' },
      { name: 'Modern', icon: 'mdi:home-modern' }
    ]
  },
  {
    name: 'Living Room',
    thumbnail: '/placeholder.jpg',
    tags: [
      { name: 'Comfort', icon: 'mdi:sofa' },
      { name: 'Family', icon: 'mdi:home-heart' }
    ]
  },
  {
    name: 'Bedroom',
    thumbnail: '/placeholder.jpg',
    tags: [
      { name: 'Rest', icon: 'mdi:bed' },
      { name: 'Private', icon: 'mdi:lock' }
    ]
  },
  {
    name: 'Bathroom',
    thumbnail: '/placeholder.jpg',
    tags: [
      { name: 'Clean', icon: 'mdi:shower' },
      { name: 'Modern', icon: 'mdi:home-modern' }
    ]
  },
  {
    name: 'Garage',
    thumbnail: '/placeholder.jpg',
    tags: [
      { name: 'Storage', icon: 'mdi:garage' },
      { name: 'Utility', icon: 'mdi:tools' }
    ]
  },
  {
    name: 'Basement',
    thumbnail: '/placeholder.jpg',
    tags: [
      { name: 'Storage', icon: 'mdi:home-floor-b' },
      { name: 'Recreation', icon: 'mdi:gamepad-variant' }
    ]
  },
  {
    name: 'Garage',
    thumbnail: '/placeholder.jpg',
    tags: [
      { name: 'Storage', icon: 'mdi:garage' },
      { name: 'Utility', icon: 'mdi:tools' }
    ]
  },
  {
    name: 'Basement',
    thumbnail: '/placeholder.jpg',
    tags: [
      { name: 'Storage', icon: 'mdi:home-floor-b' },
      { name: 'Recreation', icon: 'mdi:gamepad-variant' }
    ]
  }
];
