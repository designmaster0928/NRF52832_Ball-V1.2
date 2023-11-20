export type ActivityList = Array<ActivityListItem>;

export interface ActivityListItem {
  id: string;
  description: string;
  thumbnail: string | undefined;
}
