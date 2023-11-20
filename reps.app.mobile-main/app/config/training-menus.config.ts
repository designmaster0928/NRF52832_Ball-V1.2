import { TrainingNavigation } from 'enums/navigation.enum';
import { ImageMenuListDataItem } from 'models/list.model';

import { localImages } from './images.config';

export const trainingMainMenuData: Array<ImageMenuListDataItem> = [
  {
    description: 'Use the R1 Ball at your own pace for Wall Ball or Shooting',
    id: '1',
    imageId: 'training-main-menu-r1-freestyle', // Client ask "we can use this for swapping out gender specific images."=
    navTarget: TrainingNavigation.TrainingFreestyleScreen,
    theme: 'dark',
    title: 'R1 Ball Freestyle',
  },
  {
    description:
      'Work on your wall ball by playing along to these guided routines',
    id: '2',
    imageId: 'training-main-menu-wall-ball', // Client ask "we can use this for swapping out gender specific images."
    navTarget: TrainingNavigation.TrainingWallBallScreen,
    title: 'Wall Ball',
  },
  {
    description: 'Helpful videos to learn each technique',
    id: '3',
    imageId: 'training-main-menu-reference-library',
    navTarget: TrainingNavigation.TrainingReferenceLibraryScreen,
    title: 'Reference Library',
  },
  {
    description: 'Get your head in the zone with these audio tracks',
    id: '4',
    imageId: 'training-main-menu-mental',
    navTarget: TrainingNavigation.TrainingFreestyleScreen,
    title: 'Mental',
  },
  {
    description: 'Key exercises to get your body conditioned',
    id: '5',
    imageId: 'training-main-menu-strength',
    navTarget: TrainingNavigation.TrainingStrengthScreen,
    title: 'Strength & Conditioning',
  },
];

export const trainingFreestyleMenuData: Array<ImageMenuListDataItem> = [
  {
    description: 'Record and track how fast you shoot with each shot!',
    id: '1',
    imageId: 'training-freestyle-menu-shooting',
    navTarget: TrainingNavigation.TrainingFreestyleShootingScreen,
    source: localImages.shootingFreestyle,
    title: 'Shooting',
  },
  {
    description: 'Track and time your wall ball repetitions.',
    id: '2',
    imageId: 'training-freestyle-menu-wall-ball',
    navTarget: TrainingNavigation.TrainingFreestyleWallBallScreen,
    source: localImages.wallBallFreestyle,
    title: 'Wall ball',
  },
];
