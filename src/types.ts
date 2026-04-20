
export type View = 'dashboard' | 'protocols' | 'measurements' | 'rituals' | 'portals' | 'oracle' | 'philosophy';

export interface ProtocolPhase {
  id: string;
  code: string;
  title: string;
  mysticalTitle: string;
  description: string;
  neuroScience: string[];
  somaticPractice: string[];
  affirmation: string;
  markers: string[];
}

export interface Metric {
  name: string;
  value: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
}
