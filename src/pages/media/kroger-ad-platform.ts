import hero from '../../assets/projects/kroger-ad-platform/images/offsite-hero.png';
import problem from '../../assets/projects/kroger-ad-platform/images/problem.png';
import adExample from '../../assets/projects/kroger-ad-platform/images/ad-example.png';
import onsiteIntake from '../../assets/projects/kroger-ad-platform/images/onsite-intake.png';
import contentOverlay from '../../assets/projects/kroger-ad-platform/images/content-overlay.png';
import offsiteIntake from '../../assets/projects/kroger-ad-platform/videos/offsite-intake.mp4';

export const krogerAdPlatformMedia = {
 hero: {
    image: hero,
  },
  problem: {
    image: problem,
  },
  adExample: {
    image: adExample,
  },
  onsiteIntake  : {
    image: onsiteIntake,
  },
  contentOverlay: {
    image: contentOverlay,
  },
  offsiteIntake: {
    video: offsiteIntake,
  },
} as const; 