type InnovationProps = {
  id?: number;
  title: string;
  description: string;
};

type NormProps = {
  id?: number;
  title: string;
  description: string;
};

export const INNOVATION_SLIDES: InnovationProps[] = [
  {
    id: 1,
    title: 'Optimize Your Harvest With Smart Crop Management',
    description:
      'nlock the secrets of successful farming. From selecting the right crops to personalized planting calendars, we guide you every step of the way.',
  },
  {
    id: 2,
    title: 'Enhance Your Harvest: Smart Crop Management for Optimal Results',
    description:
      'Unlocking the Keys to Farming Success: Personalized Guidance from Crop Selection to Planting Calendars.',
  },
  {
    id: 3,
    title: 'Maximize Your Harvest Efficiency with Smart Crop Management Solutions',
    description:
      'Embark on a Journey of Successful Farming: Personalized Crop Selection and Planting Calendars for Every Step.',
  },
  {
    id: 4,
    title: 'Elevate Your Harvest Potential Through Intelligent Crop Management',
    description:
      'Unlocking the Keys to Farming Success: Personalized Guidance from Crop Selection to Planting Calendars',
  },
];

export const Norm_SLIDES: NormProps[] = [
  {
    id: 1,
    title: 'Optimize Your Harvest With Smart Crop Management',
    description:
      'nlock the secrets of successful farming. From selecting the right crops to personalized planting calendars, we guide you every step of the way.',
  },
  {
    id: 2,
    title: 'Enhance Your Harvest: Smart Crop Management for Optimal Results',
    description:
      'Unlocking the Keys to Farming Success: Personalized Guidance from Crop Selection to Planting Calendars.',
  },
  {
    id: 3,
    title: 'Maximize Your Harvest Efficiency with Smart Crop Management Solutions',
    description:
      'Embark on a Journey of Successful Farming: Personalized Crop Selection and Planting Calendars for Every Step.',
  },
  {
    id: 4,
    title: 'Elevate Your Harvest Potential Through Intelligent Crop Management',
    description:
      'Unlocking the Keys to Farming Success: Personalized Guidance from Crop Selection to Planting Calendars',
  },
];

const slideByIdx = (index: number): string => INNOVATION_SLIDES[index % INNOVATION_SLIDES.length].title;

export default slideByIdx;
