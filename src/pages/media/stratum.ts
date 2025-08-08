import stratumHeroImg from '../../assets/index/images/stratum-thumb.png';
import stratumHeroVideo from '../../assets/projects/stratum/videos/stratum_ai.mp4';
import quickLauncher from '../../assets/projects/stratum/images/quick-launcher.png';
import progressive from '../../assets/projects/stratum/videos/progressive-disclosure.mp4';
import workshop from '../../assets/projects/stratum/images/workshop.jpg';
import stratumPoc from '../../assets/projects/stratum/images/stratum-poc.png';
import quickDash from '../../assets/projects/stratum/images/quick-dash.png';

export const stratumMedia = {
  hero: {
    image: stratumHeroImg,
    video: stratumHeroVideo,
  },
  quickLauncher: {
    image: quickLauncher,
  },
  progressive: {
    video: progressive,
  },
  workshop: {
    image: workshop,
  },
  stratumPoc: {
    image: stratumPoc,
  },
  quickDash: {
    image: quickDash,
  }
} as const; 