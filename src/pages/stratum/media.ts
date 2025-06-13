import stratumHeroImg from '/src/assets/index/images/stratum_thumb.png';
import stratumHeroVideo from "/src/assets/projects/stratum/videos/stratum_ai.mp4";
import quickLauncher from "/src/assets/projects/stratum/images/quick_launcher.png";
import progressive from "/src/assets/projects/stratum/videos/progressive-disclosure.mp4";
import workshop from "/src/assets/projects/stratum/images/workshop.JPG";

export const stratumMedia = {
  hero: {
    image: stratumHeroImg,
    video: stratumHeroVideo,
  },
  quickLauncher: {
    image: quickLauncher
  },
  progressive: {
    video: progressive
  },
  workshop: {
    image: workshop
  }
} as const; 