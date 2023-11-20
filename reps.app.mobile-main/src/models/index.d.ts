import { ModelInit, MutableModel, __modelMeta__, CompositeIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerUserStats = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<UserStats, ['userId', 'primarySortKey']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly achievementId?: string | null;
  readonly averageSpeed?: number | null;
  readonly dateTime?: string | null;
  readonly elapsedTime?: number | null;
  readonly globalSecondaryIndex?: string | null;
  readonly hand?: string | null;
  readonly owner?: string | null;
  readonly primarySortKey: string;
  readonly reps?: number | null;
  readonly repTypes?: string | null;
  readonly sessionTime?: number | null;
  readonly speed?: number | null;
  readonly statId?: string | null;
  readonly timestamp: number;
  readonly topSpeed?: number | null;
  readonly userId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserStats = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<UserStats, ['userId', 'primarySortKey']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly achievementId?: string | null;
  readonly averageSpeed?: number | null;
  readonly dateTime?: string | null;
  readonly elapsedTime?: number | null;
  readonly globalSecondaryIndex?: string | null;
  readonly hand?: string | null;
  readonly owner?: string | null;
  readonly primarySortKey: string;
  readonly reps?: number | null;
  readonly repTypes?: string | null;
  readonly sessionTime?: number | null;
  readonly speed?: number | null;
  readonly statId?: string | null;
  readonly timestamp: number;
  readonly topSpeed?: number | null;
  readonly userId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserStats = LazyLoading extends LazyLoadingDisabled ? EagerUserStats : LazyUserStats

export declare const UserStats: (new (init: ModelInit<UserStats>) => UserStats) & {
  copyOf(source: UserStats, mutator: (draft: MutableModel<UserStats>) => MutableModel<UserStats> | void): UserStats;
}