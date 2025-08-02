import meridianHero from '../../assets/projects/meridian/videos/meridian-hero.mp4';
import popover from '../../assets/projects/meridian/images/popover.png';
import cardExample from '../../assets/projects/meridian/images/card-example.png';
import variables from '../../assets/projects/meridian/images/variables.png';
import properties from '../../assets/projects/meridian/images/properties.png';
import oldSystem from '../../assets/projects/meridian/images/old-system.png';
import marketingConcept from '../../assets/projects/meridian/videos/8451-website-concept.mp4';
import newSystem from '../../assets/projects/meridian/images/new-system.png';
import loginConcept from '../../assets/projects/meridian/videos/login-concept.mp4';
import filterConcept from '../../assets/projects/meridian/videos/filter-concept.mp4';

export const meridianMedia = {
  hero: {
    video: meridianHero,
  },
  popover: {
    image: popover,
  },
  cardExample: {
    image: cardExample,
  },
  variables:{
    image: variables,
  },
  properties:{
    image: properties,
  },
  oldSystem:{
    image: oldSystem,
  },
  marketingConcept: {
    video: marketingConcept,
  },
  newSystem:{
    image: newSystem,
  },
  loginConcept: {
    video: loginConcept,
  },
  filterConcept: {
    video: filterConcept,
  }
} as const; 