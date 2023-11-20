import { ModelInit, MutableModel, __modelMeta__, CustomIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerUserStats = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<UserStats, 'userId'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly userId: string;
  readonly primarySortKey: string;
  readonly globalSecondaryIndex: string;
  readonly statId: string;
  readonly timestamp: number;
  readonly throwType: string;
  readonly hand: string;
  readonly speed: number;
  readonly averageSpeed: number;
  readonly topSpeed: number;
  readonly reps: number;
  readonly sessionTime: number;
  readonly elapsedTime: number;
  readonly achievementId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserStats = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<UserStats, 'userId'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly userId: string;
  readonly primarySortKey: string;
  readonly globalSecondaryIndex: string;
  readonly statId: string;
  readonly timestamp: number;
  readonly throwType: string;
  readonly hand: string;
  readonly speed: number;
  readonly averageSpeed: number;
  readonly topSpeed: number;
  readonly reps: number;
  readonly sessionTime: number;
  readonly elapsedTime: number;
  readonly achievementId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserStats = LazyLoading extends LazyLoadingDisabled ? EagerUserStats : LazyUserStats

export declare const UserStats: (new (init: ModelInit<UserStats>) => UserStats) & {
  copyOf(source: UserStats, mutator: (draft: MutableModel<UserStats>) => MutableModel<UserStats> | void): UserStats;
}