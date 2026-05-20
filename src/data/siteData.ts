import { editorialImages, type EditorialImageAsset } from './editorialVisuals'
import type { EditorialVisualVariant } from '../types/visuals'

const sylvesterPortrait = new URL('../../images/Sylvester.png', import.meta.url).href
const ngoziPortrait = new URL('../../images/Ngozi.png', import.meta.url).href
const constancePortrait = new URL('../../images/constance.png', import.meta.url).href
const kolloPortrait = new URL('../../images/kollo.png', import.meta.url).href
const lydiaPortrait = new URL('../../images/lydia.png', import.meta.url).href
const chiomaPortrait = new URL('../../images/chioma.png', import.meta.url).href
const fortunePortrait = new URL('../../images/Fortune.jpg', import.meta.url).href
const akanPortrait = new URL('../../images/Akan.png', import.meta.url).href

export type ServiceItem = {
  id: string
  title: string
  icon: string
  visual: EditorialVisualVariant
  image: EditorialImageAsset
  points: string[]
}

export type TrustSignal = {
  id: 'integration' | 'institutional' | 'execution' | 'impact'
  eyebrow: string
  title: string
  description: string
}

export type ProcessStep = {
  step: string
  title: string
  description: string
  outcome: string
}

export type LeadershipProfile = {
  id: string
  name: string
  role: string
  cardRole?: string
  preview: string
  image?: string
  imageFit?: 'cover' | 'contain'
  imagePosition?: string
  imageScale?: number
  biography?: string[]
  expertise?: string[]
  availabilityNote?: string
}

export const heroStats = [
  { value: '4', label: 'Core Service Domains' },
  { value: '20+', label: 'Expert Professionals' },
  { value: '100%', label: 'Client-Centric Approach' },
]

export const trustSignals: TrustSignal[] = [
  {
    id: 'integration',
    eyebrow: 'Integrated Advisory',
    title: 'One partner across legal, technical, research, and human-capital priorities.',
    description:
      'Clients engage one coordinated team instead of stitching together separate advisors for commercialization, training, and execution.',
  },
  {
    id: 'institutional',
    eyebrow: 'Institutional Depth',
    title: 'Built for universities, research institutes, agencies, corporates, and growth ventures.',
    description:
      'Our work is designed for organizations that need strategy, governance, and delivery discipline in equal measure.',
  },
  {
    id: 'execution',
    eyebrow: 'Execution Focus',
    title: 'From opportunity diagnosis to implementation support and market readiness.',
    description:
      'We move beyond concepts to practical structures, partner pathways, and capability-building programs that can be acted on.',
  },
  {
    id: 'impact',
    eyebrow: 'Impact Lens',
    title: 'Every engagement is oriented toward measurable progress and long-term value.',
    description:
      'We frame outcomes around readiness, adoption, strategic fit, and the sustained growth potential of each initiative.',
  },
]

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Diagnose the opportunity',
    description:
      'We assess the innovation, institution, or capability gap, then clarify the legal, technical, and market realities shaping the work.',
    outcome: 'Clear priorities and decision-ready insight',
  },
  {
    step: '02',
    title: 'Structure the pathway',
    description:
      'We translate findings into a practical roadmap covering commercialization routes, stakeholder alignment, training needs, and governance considerations.',
    outcome: 'A focused strategy with executable workstreams',
  },
  {
    step: '03',
    title: 'Activate delivery',
    description:
      'We support implementation through advisory services, research-backed inputs, partner engagement, and learning interventions tailored to the context.',
    outcome: 'Coordinated execution across people and systems',
  },
  {
    step: '04',
    title: 'Strengthen for scale',
    description:
      'We help institutionalize progress through capability transfer, performance tracking, and structures that sustain momentum after the initial engagement.',
    outcome: 'Durable value creation and organizational readiness',
  },
]

export const services: ServiceItem[] = [
  {
    id: 'tech-transfer-innovation',
    title: 'Tech Transfer & Innovation Commercialization',
    icon: 'IP',
    visual: 'commercialization',
    image: editorialImages.indoorPlantLab,
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
    image: editorialImages.farmerInField,
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
    image: editorialImages.advisoryRoundtable,
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

export const boardMembers: LeadershipProfile[] = [
  {
    id: 'sylvester-oikeh',
    name: 'Dr. Sylvester Oikeh',
    role: 'Chairperson',
    cardRole: 'Chair',
    image: sylvesterPortrait,
    imageFit: 'cover',
    imagePosition: 'center center',
    imageScale: 1.03,
    preview:
      'Dr. Oikeh is a senior R&D leader with over 30 years of experience in agricultural innovation, having led large-scale international programmes and mobilised over USD 143 million in funding to advance food and nutrition security across Africa.',
    expertise: ['Agricultural transformation', 'Climate resilience', 'Partnership mobilisation'],
    biography: [
      'Dr. Oikeh is a strategic leader with over 30 years of experience in research and development, including 15 years in senior leadership roles across universities and leading international research institutions, including CGIAR centres. His work has focused on advancing agricultural transformation to enhance food and nutrition security across Africa.',
      'He has led and supported large-scale, multi-country initiatives addressing natural resource management and climate resilience, including projects mitigating the impact of environmental change on livelihoods. Dr. Oikeh has managed complex programmes with budgets exceeding USD 133 million and led multidisciplinary teams of over 80 professionals.',
      'An expert in product development and deployment, he has technical expertise spanning cropping systems, agronomy, soil fertility, and the plant-human nutrition interface. He played a key leadership role in the development and deployment of climate-smart, drought-tolerant, and insect-protected maize hybrids under the Water Efficient Maize for Africa initiative, one of the most successful public-private partnerships in agricultural biotechnology.',
      'Dr. Oikeh is an accomplished partnership builder with extensive experience in public-private collaborations and multi-institutional programmes. He is also a highly effective fundraiser, having mobilised over USD 143 million through successful grant proposals and investment strategies.',
      'A published researcher, he has authored and co-authored more than 100 scientific publications in leading journals, books, and conference proceedings.',
    ],
  },
  {
    id: 'ngozi-uwannah',
    name: 'Dr. Uwannah, Ngozi Caroline',
    role: 'Board Member',
    cardRole: 'Board',
    image: ngoziPortrait,
    imageFit: 'contain',
    imagePosition: 'center 54%',
    imageScale: 1,
    preview:
      'Dr. Uwannah is an Associate Professor and applied psychology expert with over 18 years of experience, contributing to organisational development, human capital strategy, and governance.',
    expertise: [
      'Applied psychology',
      'Human capital development',
      'Organisational behaviour',
    ],
    biography: [
      'Dr. Uwannah is an Associate Professor in the Department of Education at Babcock University, Nigeria, with over 18 years of experience in teaching, research, and academic leadership. She brings deep expertise in applied psychology and human capital development, with a focus on workforce dynamics, organisational behaviour, and the interface between work, family, and productivity.',
      'Her research advances understanding of workplace systems and personnel development, providing valuable insights relevant to organisational performance and sustainable development. She has an extensive publication record in local and international peer-reviewed journals in personnel and applied psychology.',
      'Dr. Uwannah currently serves as Head of the Department of Education at Babcock University and is a Fellow of the Institute of Strategic Human Resource Management (ISHRM), Nigeria. She is also an active member of several academic and professional bodies, contributing to research, policy, and institutional development.',
      'Her expertise strengthens the company\'s governance and advisory capacity, particularly in areas of human capital, organisational systems, and inclusive development.',
    ],
  },
]

export const managementTeam: LeadershipProfile[] = [
  {
    id: 'constance-onyekachi',
    name: 'Constance Onyekachi',
    role: 'Chief Executive Officer',
    cardRole: 'CEO',
    image: constancePortrait,
    imageFit: 'contain',
    imagePosition: 'center 46%',
    imageScale: 1,
    preview:
      'Constance is a legal and innovation leader with over 20 years of experience across governance, trade, and intellectual property, driving strategies that translate research and innovation into scalable impact across Africa.',
    expertise: [
      'Corporate governance',
      'Regulatory strategy',
      'Technology transfer',
    ],
    biography: [
      'Constance Onyekachi is a distinguished executive and strategic leader who serves as the Chief Executive Officer of BioAfri-Connect. She commands over two decades of high-impact experience spanning institutional leadership, corporate governance, regulatory compliance, and innovation policy across the public and private sectors. At BioAfri-Connect, she spearheads the corporate mission to accelerate technology transfer, commercialise research, and drive sustainable development across Africa.',
      'Prior to her appointment as CEO, Constance held vital senior executive roles, including General Manager, Company Secretary, and Head of Legal & Corporate Affairs at ProHealth HMO and the Nigeria Social Insurance Trust Fund. In these positions, she orchestrated enterprise-wide governance, risk management, and operational strategy initiatives that significantly enhanced institutional resilience and performance.',
      'Constance specialises in competition law, intellectual property, international business law, and regulatory strategy, with a strong track record of turning research and institutional assets into scalable market solutions. As CEO, she focuses on strengthening governance, building innovation ecosystems, and driving sustainable growth across emerging and regulated sectors. She holds an LL.B, BL, and LL.M, and is pursuing an LL.D focused on competition, trade policy, innovation, and SME development. She brings deep insight into how legal and regulatory frameworks shape the commercialisation of science.',
    ],
  },
  {
    id: 'issoufou-abdourhamane',
    name: 'Dr. Issoufou Kollo Abdourhamane',
    role: 'Head, Bioeconomy, Agrifood Systems and Climate Change',
    cardRole: 'Bioeconomy',
    image: kolloPortrait,
    imageFit: 'cover',
    imagePosition: 'center 20%',
    imageScale: 1.04,
    preview:
      'Dr. Issoufou is an agricultural scientist and international development expert with over 35 years of experience leading agricultural innovation, climate-resilient food systems, biotechnology, and regional agri-food transformation programmes across Africa.',
    expertise: [
      'Bioeconomy strategy',
      'Climate-resilient agrifood systems',
      'Agricultural biotechnology',
    ],
    biography: [
      'Dr. Issoufou Kollo Abdourhamane is a distinguished agricultural scientist, research executive, and international development leader with more than 35 years of experience pioneering bioeconomy strategies, climate-resilient agrifood systems, and sustainable agricultural transformation across Africa. His career is defined by an ability to leverage agricultural biotechnology, advanced plant health systems, and innovative seed systems to strengthen food security, rural livelihoods, and environmental resilience on a continental scale.',
      'An expert in navigating complex regulatory, scientific, and political landscapes, Dr. Abdourhamane has successfully directed multi-country research-for-development initiatives funded by major international donors, including USAID, the World Bank, the African Development Bank, and the Rockefeller Foundation. Notably, during his tenure as West Africa Representative and Project Manager for the African Agricultural Technology Foundation (AATF), he orchestrated the landmark Bt Cowpea Project across Nigeria, Ghana, and Burkina Faso. His strategic leadership was instrumental in achieving the historic regulatory approval and commercialisation of the pod borer-resistant (PBR) cowpea in Nigeria, a breakthrough that significantly reduced pesticide dependence, enhanced smallholder climate resilience, and transformed regional agrifood dynamics.',
      'Dr. Abdourhamane holds a PhD in Phytopathology and Microbiology from Texas A&M University, with advanced specialisations in epidemiology, plant diagnostics, biotechnology, and statistical modelling. His extensive leadership background spans international agricultural research centers, regional organisations, and academic institutions, positioning him as a premier authority on driving science-based, climate-smart bioeconomies.',
    ],
  },
  {
    id: 'lydia-anenga-arthur',
    name: 'Lydia Mbakoron Anenga-Arthur',
    role: 'Head, Technology Transfer & Innovation Commercialization',
    cardRole: 'Innovation',
    image: lydiaPortrait,
    imageFit: 'cover',
    imagePosition: 'center 18%',
    imageScale: 1.03,
    preview:
      'Arthur is a senior legal expert with over 20 years of experience, specialising in technology transfer and innovation commercialisation, with a focus on IP management, licensing, and cross-sector collaboration.',
    expertise: ['IP management', 'Licensing', 'Technology transfer'],
    biography: [
      'Anenga-Arthur is a seasoned legal professional with over 20 years of experience spanning commercial and company law, competition and consumer protection, regulatory enforcement, arbitration and mediation advocacy, IP, and litigation.',
      'She specialises in technology transfer and innovation commercialisation, operating at the intersection of law, business, and emerging technologies to translate innovation into market-ready solutions.',
      'She oversees the identification, protection, and commercialisation of intellectual property assets, with expertise in IP management and licensing. In addition, she leads strategic collaborations and stakeholder engagement, fostering innovation ecosystems and enabling effective cross-sector partnerships.',
      'Arthur holds an LL.M. in Competition and Consumer Protection Law and Policy. She is currently pursuing a PhD in Law.',
    ],
  },
  {
    id: 'chioma-ekenta',
    name: 'Chioma Joy Ekenta',
    role: 'Head, Agriculture & Food Systems',
    cardRole: 'Agriculture',
    image: chiomaPortrait,
    imageFit: 'cover',
    imagePosition: 'center 15%',
    imageScale: 1.02,
    preview:
      'Chioma is a rural development and M&E specialist with over a decade of experience supporting World Bank programmes and community-driven initiatives to advance sustainable livelihoods and agricultural resilience.',
    expertise: ['Rural development', 'Monitoring & Evaluation', 'Community resilience'],
    biography: [
      'Ekenta is a rural development practitioner and Monitoring and Evaluation Specialist with over a decade of experience advancing community-driven development, poverty reduction, and sustainable livelihoods in Nigeria.',
      'She has contributed to major World Bank-supported programmes, including the Community and Social Development Project (CSDP) and the Nigeria COVID-19 Action Recovery and Economic Stimulus (NG-CARES) Programme, where she supported initiatives to strengthen resilience and improve outcomes for vulnerable communities.',
      'Her work also includes supporting women-focused empowerment initiatives, such as the Her Dream Fund, that promote enterprise development and economic inclusion. Through her field experience, she brings practical insight into how targeted interventions in knowledge, access, and opportunity can drive meaningful and lasting change across households and communities.',
      'Chioma holds a Master\'s degree in Rural Sociology and Development and a Bachelor\'s degree in Animal Science and Animal Health, and is currently pursuing a PhD in Agricultural Extension and Rural Development. She is passionate about agricultural transformation, resilience building, and sustainable development.',
    ],
  },
  {
    id: 'fortune-chukwuemeka',
    name: 'Fortune Chinaza Chukwuemeka',
    role: 'ICT',
    cardRole: 'ICT',
    image: fortunePortrait,
    imageFit: 'cover',
    imagePosition: 'center 16%',
    imageScale: 1.02,
    preview:
      'Fortune is a digital innovation professional focused on leveraging technology to develop scalable solutions, improve business performance, and drive enterprise growth. He brings a creative, solution-oriented mindset to the intersection of technology and enterprise.',
    expertise: ['Digital transformation', 'Enterprise solutions', 'Business development'],
    biography: [
      'Fortune is an innovation-driven professional with experience spanning digital technology, enterprise solutions, and business development. He brings a multidisciplinary approach to leveraging technology to solve real-world challenges and support scalable business growth.',
      'He has played key roles in building and managing technology-enabled ventures, with a focus on developing efficient, user-centred solutions. As Co-Founder of Tafiya Swift, he has contributed to the design and deployment of technology-driven logistics systems that enhance operational efficiency and service delivery for businesses.',
      'Fortune\'s expertise lies in identifying market opportunities and applying digital tools to create practical, scalable solutions. His work supports the integration of technology into business processes, enabling improved performance, innovation, and competitiveness.',
      'He is passionate about digital transformation, innovation ecosystems, and the application of technology to drive sustainable development.',
    ],
  },
  {
    id: 'akan-iwatt',
    name: 'Akaninyene (Akan) Iwatt, FCA',
    role: 'Head, Finance',
    cardRole: 'Finance',
    image: akanPortrait,
    imageFit: 'contain',
    imagePosition: 'center 52%',
    imageScale: 1,
    preview:
      'Akan is a chartered accountant with over 20 years of experience in finance, tax, and corporate governance, supporting compliance, risk management, and sustainable growth across sectors.',
    expertise: ['Finance governance', 'Tax advisory', 'Risk management'],
    biography: [
      'Akan is a Fellow of the Institute of Chartered Accountants of Nigeria and an Associate of the Institute of Chartered Accountants in England and Wales, with over 20 years of international and multi-sector experience across professional services, public sector tax administration, and industry.',
      'She brings deep expertise in finance, tax, and corporate governance, with a strong focus on supporting organisational growth, regulatory compliance, and sound financial management. Her experience spans the UK and Nigeria, including roles in government tax administration, energy and utilities, and advisory services.',
      'Akan has held senior leadership positions across tax audit, treasury, and budget control functions. She has led large-scale corporate tax audits and provided strategic advisory on financial planning, risk management, and governance frameworks.',
      'Her work supports the development of robust financial and compliance structures that enable innovation-driven organisations to operate effectively, manage risk, and scale sustainably.',
    ],
  },
]
