import type { EditorialVisualVariant } from '../types/visuals'

export type ServiceItem = {
  id: string
  title: string
  icon: string
  visual: EditorialVisualVariant
  points: string[]
}

export const heroStats = [
  { value: '4', label: 'Core Service Domains' },
  { value: '20+', label: 'Expert Professionals' },
  { value: '100%', label: 'Client-Centric Approach' },
]

export const services: ServiceItem[] = [
  {
    id: 'tech-transfer-innovation',
    title: 'Tech Transfer & Innovation Commercialization',
    icon: 'IP',
    visual: 'commercialization',
    points: [
      'IP identification and commercial potential assessment',
      'Patent and IP strategy development',
      'Licensing, spin-off structuring, and commercialization support',
      'Technology scouting, partner matching, and due diligence',
    ],
  },
  {
    id: 'agriculture-food-systems',
    title: 'Agriculture and Food Systems',
    icon: 'AG',
    visual: 'agriculture',
    points: [
      'Agricultural commodity market and supply chain services',
      'Product development and commercialization lifecycle support',
      'Project management for agriculture and innovation initiatives',
      'Actionable research and socio-economic impact insights',
    ],
  },
  {
    id: 'human-development-training',
    title: 'Human Development Consultancy & Training',
    icon: 'HD',
    visual: 'training',
    points: [
      'Innovation and entrepreneurship training programs',
      'IP management and commercialization training',
      'Leadership and management development',
      'Digital-age skills development and workforce planning',
    ],
  },
]

export const coreValues = [
  'Innovation with Purpose',
  'Integrity First',
  'Excellence Always',
  'Human Potential',
  'Collaborative Synergy',
  'Sustainable Impact',
]

export const differentiators = [
  'Integrated approach across legal, technical, and human capital domains',
  'Deep industry knowledge from academia, research, and commercialization practice',
  'Results-oriented delivery with measurable value',
  'Global perspective with local regulatory and market expertise',
]

export const whoWeServe = [
  'Startups and spin-off companies',
  'Universities and research institutions',
  'Large corporations with R&D departments',
  'Government agencies and public sector organizations',
  'Investors, venture capital firms, and individual innovators',
]
