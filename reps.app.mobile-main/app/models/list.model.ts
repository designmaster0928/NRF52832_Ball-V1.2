import { ImageSourcePropType } from 'react-native';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { EditParams } from './edit.model';
import { NavigationEnums } from './navigation.model';
import { Theme } from './theme.model';

export type HorizontalThumbnailListData =
  Array<HorizontalThumbnailListDataItem>;

export interface HorizontalThumbnailListDataItem {
  genre?: string;
  id: string;
  description: string;
  thumbnail: string | undefined;
}

export type ActivityListData = Array<ActivityListDataItem>;

export interface ActivityListDataItem {
  id: string;
  description: string;
  thumbnail: string | undefined;
}

export type ImageMenuListData = Array<ImageMenuListDataItem>;

export interface ImageMenuListDataItem {
  description: string;
  id: string;
  imageId: string;
  navTarget: NavigationEnums;
  theme?: Theme;
  title: string;
  source?: ImageSourcePropType;
}

export type HistoryListData = Array<HistoryListDataItem>;

export interface HistoryListDataItemStat {
  stat?: string;
  title?: string;
  statUnit?: string;
}

export type HistoryListDataItemStats = Array<HistoryListDataItemStat>;

export interface HistoryListDataItem {
  id?: string;
  day?: string;
  month?: string;
  stats?: HistoryListDataItemStats;
  supTitle?: string | null;
  title?: string;
}

export type RoundImageTitleListData = Array<RoundImageTitleListDataItem>;

export interface RoundImageTitleListDataItem {
  icon?: IconProp;
  id: number | null;
  imageSource?: string;
  name: string | null;
  onPress?: () => void;
}

export type TextMenuListData = Array<TextMenuListDataItem>;

export interface TextMenuListDataItem {
  id: string;
  navTarget?: NavigationEnums;
  onPress?: () => void;
  params?: EditParams;
  subTitle?: string;
  title: string;
}

export type TrainingMediaListData = Array<TrainingMediaListDataItem>;

export interface TrainingMediaListDataItem {
  duration: number | null;
  genre: string | null;
  id: number;
  imageSource: string;
  personality: string | null;
  title: string | null;
}

export type ReferenceLibraryData = Array<ReferenceLibraryDataItem>;

export interface ReferenceLibraryDataItem {
  id: number;
  imageSource: string;
  coach: string | null;
  title: string | null;
}
