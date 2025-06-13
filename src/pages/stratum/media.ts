import stratumHeroImg from '../../assets/index/images/stratum_thumb.png';
import stratumHeroVideo from '../../assets/projects/stratum/videos/stratum_ai.mp4';
import quickLauncher from '../../assets/projects/stratum/images/quick_launcher.png';
import progressive from '../../assets/projects/stratum/videos/progressive-disclosure.mp4';
import workshop from '../../assets/projects/stratum/images/workshop.png';

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
} as const; 