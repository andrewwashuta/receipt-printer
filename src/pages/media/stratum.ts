import stratumHeroImg from '../../assets/index/images/stratum-thumb.png';
import stratumHeroVideo from '../../assets/projects/stratum/videos/stratum-ai.mp4';
import quickLauncher from '../../assets/projects/stratum/images/quick-launcher.png';
import progressive from '../../assets/projects/stratum/videos/progressive-disclosure.mp4';
import workshop from '../../assets/projects/stratum/images/workshop.jpg';
import stratumPoc from '../../assets/projects/stratum/images/stratum-poc.png';
import quickDash from '../../assets/projects/stratum/images/quick-dash.png';
import quickAction from '../../assets/projects/stratum/videos/command-prompt.mp4';
import conditionalDataViz from '../../assets/projects/stratum/videos/conditional-data-viz.mp4';

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
  },
  quickAction: {
    video: quickAction,
  },
  conditionalDataViz: {
    video: conditionalDataViz,
  }
} as const; 