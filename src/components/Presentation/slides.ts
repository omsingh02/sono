export type SlideVariant = 'title' | 'content' | 'dark';

export interface SlideContent {
  variant: SlideVariant;
  title?: string;
  subtitle?: string;
  description?: string;
  items?: string[];
  footer?: string;
  question?: string;
  formula?: string;
  formulaItems?: { label: string; value: string }[];
  highlightBox?: string;
  steps?: { label: string; text: string }[];
  applications?: { emoji: string; title: string; description: string }[];
  principles?: { title: string; description: string }[];
  futureItems?: { title: string; description: string }[];
  image?: string;
  backgroundImage?: string;
}

export const slides: SlideContent[] = [
  {
    variant: 'title',
    title: 'Sonometer',
    subtitle: 'How do we understand invisible sound?',
    description: 'A simple device that reveals the physics of vibration',
    image: '/finding-pattern-in-noise.png',
  },
  {
    variant: 'content',
    title: 'What is a Sonometer?',
    description: 'A sonometer is a box with a stretched wire that vibrates when you make sound near it—like a guitar string. When the vibrations match a tuning fork\'s frequency perfectly, the wire vibrates hardest (resonance), and you can measure that exact frequency. By changing the wire\'s length or tension, you discover the simple rules that control all vibrating things:',
    items: [
      'Longer wire = lower pitch',
      'Tighter wire = higher pitch',
    ],
  },
  {
    variant: 'dark',
    title: 'Three Fundamental Principles',
    image: '/standing-wave.png',
    principles: [
      { title: 'Standing Waves', description: 'When a vibrating wire is trapped between two fixed points, waves bounce back and forth and stack on top of each other, creating spots that barely move and spots that vibrate wildly. This pattern only happens at specific frequencies.' },
      { title: 'Resonance', description: 'When the wire\'s natural vibration frequency matches the frequency of a tuning fork nearby, energy transfers perfectly and the wire vibrates with maximum amplitude (biggest swings). It\'s like pushing a swing at exactly the right moment—small pushes create huge motion.' },
      { title: 'Wave Speed Relationship', description: 'Sound travels through the wire at a speed determined by how tight it is (tension) and how heavy it is (mass). Tighter wires = faster waves = higher pitch; heavier wires = slower waves = lower pitch.' },
    ],
  },
  {
    variant: 'content',
    title: 'The Mathematics',
    image: '/maths.png',
    description: 'The formula f = (1/2L)√(T/μ) just captures this relationship: vibrations follow predictable patterns—same wire, same frequency, every time—whether it\'s a guitar string or a building shaking in wind.',
    highlightBox: 'Key insight: Find something\'s natural frequency, and you control it. Tighter control of resonance = tighter control of reality.',
  },
  {
    variant: 'dark',
    title: 'Real Applications Today',
    backgroundImage: '/real-applications.png',
    applications: [
      { emoji: '🎸', title: 'Musical Instruments', description: 'Guitar tuning, piano strings, violin bridges—luthiers use sonometer principles to test wood quality' },
      { emoji: '🏗️', title: 'Noise Control', description: 'Architects measure building vibrations to prevent resonance disasters when bridge frequencies match wind gusts' },
      { emoji: '🔬', title: 'Manufacturing', description: 'Factories test metal wires and cables by measuring resonant frequencies—detects internal cracks non-destructively' },
      { emoji: '⚕️', title: 'Medical', description: 'Ultrasound machines use resonance principles to vibrate crystals at precise frequencies for internal imaging' },
    ],
  },
  {
    variant: 'content',
    title: 'The Future: What\'s Coming',
    image: '/future-applications.png',
    futureItems: [
      { title: 'Smart Vibration Sensors', description: 'Roads and bridges detecting cracks by monitoring frequency changes in real time' },
      { title: 'Wireless Power Transfer', description: 'Transmitting electricity wirelessly by matching transmitter and receiver frequencies perfectly' },
      { title: 'Earthquake Early Warning', description: 'Ground sensors detecting Earth\'s resonant frequencies to predict where earthquakes hit hardest' },
      { title: 'Acoustic Levitation', description: 'Using precisely tuned sound waves to hold objects suspended in air without touching them' },
      { title: 'LIGO Gravitational Detectors', description: 'Nobel Prize-winning technology using resonance amplification to detect ripples in spacetime from black holes' },
    ],
  },
  {
    variant: 'title',
    title: 'The big idea:',
    description: 'A sonometer shows us that invisible phenomena follow predictable patterns. With just a wire, a box, and weights, we can measure sound and prove the math.',
    footer: "Physics isn't abstract—it's everywhere.",
  },
];
