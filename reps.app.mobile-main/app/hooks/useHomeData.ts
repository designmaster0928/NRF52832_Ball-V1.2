import { ActivityList } from 'models/activity.model';
import { VideoList } from 'models/video.model';

interface HomeData {
  teammateActivity: ActivityList;
  recentVideos: VideoList;
}

const thumbnailWidth: number = 163;
const thumbnailHeight: number = 122;

export function useHomeData(): HomeData {
  return {
    recentVideos: [
      {
        description: 'Switching Hands',
        id: '1',
        thumbnail: `https://picsum.photos/${thumbnailWidth}/${thumbnailHeight}`,
      },
      {
        description: 'Righty Quick Stick',
        id: '2',
        thumbnail: `https://picsum.photos/${thumbnailWidth}/${thumbnailHeight}`,
      },
      {
        description: 'Switching Hands',
        id: '3',
        thumbnail: `https://picsum.photos/${thumbnailWidth}/${thumbnailHeight}`,
      },
    ],
    teammateActivity: [
      {
        description: 'Congratulate Andrew, he just threw his fastest shot!',
        id: '1',
        thumbnail: `https://picsum.photos/${thumbnailWidth}`,
      },
      {
        description: 'Your facebook friend Bill Haley just joined REPS!',
        id: '2',
        thumbnail: undefined,
      },
      {
        description: "Megan is on a workout streak! That's 8 weeks in a row!",
        id: '3',
        thumbnail: `https://picsum.photos/${thumbnailWidth}`,
      },
    ],
  };
}
