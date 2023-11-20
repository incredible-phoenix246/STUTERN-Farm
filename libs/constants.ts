// import icons
import dicover from '../public/icons/discover.svg';
import menuBoard from '../public/icons/menu-board.svg';
import monitor from '../public/icons/monitor.svg';
import people from '../public/icons/people.svg';
import search from '../public/icons/search.svg';
import stack from '../public/icons/stack.svg';
import value from '../public/value.svg';
import cal from '../public/cal.svg';
import clck from '../public/clock.svg';
import weather from '../public/weather.svg';


export type NavbarLinkProps = {
  id?: number;
  link: string;
  label: string;
};

export type FooterLinkProps = {
  company: NavbarLinkProps[];
  help: NavbarLinkProps[];
  emails: { id?: number; email: string }[];
};
export type HowItWorksProps = {
  id?: number;
  title: string;
  description: string;
  icon: string;
};
export type OurValuesProps = {
  id?: number;
  title: string;
  description: string;
  icon: string;
};
export type ServicesProps = {
  id?: number;
  title: string;
  description: string;
  icon: string;
};

export const NAV_LINKS: NavbarLinkProps[] = [
  { id: 1, link: 'home', label: 'Crop Management' },
  { id: 2, link: 'services', label: 'Market Insights' },
  { id: 3, link: 'about-us', label: 'Weather Forecast' },
  { id: 4, link: 'contacts', label: 'Problem Solving' },
  { id: 5, link: 'contacts', label: 'Blog' },
];

export const FOOTER_LINKS: FooterLinkProps = {
  company: [
    { id: 1, link: 'services', label: 'Support Center' },
    { id: 2, link: 'about', label: 'Our Mission' },
    { id: 3, link: 'contacts', label: 'Meet the Team' },

  ],
  help: [
    { id: 1, link: 'faq', label: 'faq' },
    { id: 2, link: 'terms', label: 'terms of services' },
    { id: 3, link: 'privacy', label: 'privacy policy' },
  ],
  emails: [
    { id: 1, email: 'Support Center' },
    { id: 2, email: 'Email: stuternfarm@gmail.com' },
    { id: 3, email: 'Phone no: +23475903892' },
  ],
};

export const HOW_IT_WORKS: HowItWorksProps[] = [
  {
    id: 1,
    title: 'Determine which fields will be workable on which days',
    description:
      'With Stutern Farm, you can review fieldwork forecasts and determine conditions for certain operations, including tilling, planting and spraying.',
    icon: cal,
  },
  {
    id: 2,
    title: 'Access real-time projections on yield and soil fertility.',
    description:
      'In addition to precipitation, temperature and humidity, these forecasts provide growth estimates based on growing degree days and even harvest conditions.',
    icon: clck,
  },
  {
    id: 3,
    title: 'View field-level weather forecasts.',
    description:
      'Watch your vision take shape as our skilled development team brings concepts to life. We create prototypes and iterative versions, providing you with a tangible understanding of the evolving solution and room for feedback.',
    icon: weather,
  },
];

export const OurValues: OurValuesProps[] = [
  {
    id: 1,
    title: 'Innovation',
    description: 'We thrive on pushing boundaries and exploring new horizons.',
    icon: value,
  },
  {
    id: 2,
    title: 'Collaboration',
    description: 'Working together to achieve shared success and surpass expectations.',
    icon: value,
  },
  {
    id: 3,
    title: 'Excellence',
    description: 'Striving for the highest standards in everything we do.',
    icon: value,
  },
];

export const Services: ServicesProps[] = [
  {
    id: 1,
    title: 'Custom Software Development:',
    description: 'Tailored solutions to meet your unique business needs, driving efficiency and growth.',
    icon: dicover,
  },
  {
    id: 2,
    title: 'Web and Mobile Applications',
    description: 'Engaging and responsive applications that elevate your online presence and user experience.',
    icon: menuBoard,
  },
  {
    id: 3,
    title: 'Digital Transformation',
    description:
      'Guiding your business through the digital evolution, ensuring relevance and agility in a rapidly changing landscape.',
    icon: monitor,
  },
  {
    id: 4,
    title: 'Consulting and Strategy',
    description:
      'Strategic insights to align your technology initiatives with your business goals, optimizing performance and ROI.',
    icon: people,
  },
  {
    id: 5,
    title: 'App Development',
    description:
      'Strategic insights to align your technology initiatives with your business goals, optimizing performance and ROI.',
    icon: search,
  },
  {
    id: 6,
    title: 'Deployment & Integration',
    description:
      'Guiding your business through the digital evolution, ensuring relevance and agility in a rapidly changing landscape.',
    icon: stack,
  },
];
