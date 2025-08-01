import meridianHero from '../../assets/projects/meridian/videos/meridian-hero.mp4';
import popover from '../../assets/projects/meridian/images/popover.png';
import cardExample from '../../assets/projects/meridian/images/card-example.png';
import variables from '../../assets/projects/meridian/images/variables.png';
import properties from '../../assets/projects/meridian/images/properties.png';
import oldSystem from '../../assets/projects/meridian/images/old-system.png';

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
  }
} as const; 