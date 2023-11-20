/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserStatsInput = {
  achievementId?: string | null,
  averageSpeed?: number | null,
  dateTime?: string | null,
  elapsedTime?: number | null,
  globalSecondaryIndex?: string | null,
  hand?: string | null,
  owner?: string | null,
  primarySortKey: string,
  reps?: number | null,
  repTypes?: string | null,
  sessionTime?: number | null,
  speed?: number | null,
  statId?: string | null,
  timestamp: number,
  topSpeed?: number | null,
  userId: string,
  _version?: number | null,
};

export type ModelUserStatsConditionInput = {
  achievementId?: ModelStringInput | null,
  averageSpeed?: ModelIntInput | null,
  dateTime?: ModelStringInput | null,
  elapsedTime?: ModelIntInput | null,
  globalSecondaryIndex?: ModelStringInput | null,
  hand?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  reps?: ModelIntInput | null,
  repTypes?: ModelStringInput | null,
  sessionTime?: ModelIntInput | null,
  speed?: ModelFloatInput | null,
  statId?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  topSpeed?: ModelIntInput | null,
  and?: Array< ModelUserStatsConditionInput | null > | null,
  or?: Array< ModelUserStatsConditionInput | null > | null,
  not?: ModelUserStatsConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UserStats = {
  __typename: "UserStats",
  achievementId?: string | null,
  averageSpeed?: number | null,
  dateTime?: string | null,
  elapsedTime?: number | null,
  globalSecondaryIndex?: string | null,
  hand?: string | null,
  owner?: string | null,
  primarySortKey: string,
  reps?: number | null,
  repTypes?: string | null,
  sessionTime?: number | null,
  speed?: number | null,
  statId?: string | null,
  timestamp: number,
  topSpeed?: number | null,
  userId: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateUserStatsInput = {
  achievementId?: string | null,
  averageSpeed?: number | null,
  dateTime?: string | null,
  elapsedTime?: number | null,
  globalSecondaryIndex?: string | null,
  hand?: string | null,
  owner?: string | null,
  primarySortKey: string,
  reps?: number | null,
  repTypes?: string | null,
  sessionTime?: number | null,
  speed?: number | null,
  statId?: string | null,
  timestamp?: number | null,
  topSpeed?: number | null,
  userId: string,
  _version?: number | null,
};

export type DeleteUserStatsInput = {
  userId: string,
  primarySortKey: string,
  _version?: number | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelUserStatsFilterInput = {
  achievementId?: ModelStringInput | null,
  averageSpeed?: ModelIntInput | null,
  dateTime?: ModelStringInput | null,
  elapsedTime?: ModelIntInput | null,
  globalSecondaryIndex?: ModelStringInput | null,
  hand?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  primarySortKey?: ModelStringInput | null,
  reps?: ModelIntInput | null,
  repTypes?: ModelStringInput | null,
  sessionTime?: ModelIntInput | null,
  speed?: ModelFloatInput | null,
  statId?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  topSpeed?: ModelIntInput | null,
  userId?: ModelStringInput | null,
  and?: Array< ModelUserStatsFilterInput | null > | null,
  or?: Array< ModelUserStatsFilterInput | null > | null,
  not?: ModelUserStatsFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelUserStatsConnection = {
  __typename: "ModelUserStatsConnection",
  items:  Array<UserStats | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionUserStatsFilterInput = {
  achievementId?: ModelSubscriptionStringInput | null,
  averageSpeed?: ModelSubscriptionIntInput | null,
  dateTime?: ModelSubscriptionStringInput | null,
  elapsedTime?: ModelSubscriptionIntInput | null,
  globalSecondaryIndex?: ModelSubscriptionStringInput | null,
  hand?: ModelSubscriptionStringInput | null,
  primarySortKey?: ModelSubscriptionStringInput | null,
  reps?: ModelSubscriptionIntInput | null,
  repTypes?: ModelSubscriptionStringInput | null,
  sessionTime?: ModelSubscriptionIntInput | null,
  speed?: ModelSubscriptionFloatInput | null,
  statId?: ModelSubscriptionStringInput | null,
  timestamp?: ModelSubscriptionIntInput | null,
  topSpeed?: ModelSubscriptionIntInput | null,
  userId?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserStatsFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserStatsFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateUserStatsMutationVariables = {
  input: CreateUserStatsInput,
  condition?: ModelUserStatsConditionInput | null,
};

export type CreateUserStatsMutation = {
  createUserStats?:  {
    __typename: "UserStats",
    achievementId?: string | null,
    averageSpeed?: number | null,
    dateTime?: string | null,
    elapsedTime?: number | null,
    globalSecondaryIndex?: string | null,
    hand?: string | null,
    owner?: string | null,
    primarySortKey: string,
    reps?: number | null,
    repTypes?: string | null,
    sessionTime?: number | null,
    speed?: number | null,
    statId?: string | null,
    timestamp: number,
    topSpeed?: number | null,
    userId: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserStatsMutationVariables = {
  input: UpdateUserStatsInput,
  condition?: ModelUserStatsConditionInput | null,
};

export type UpdateUserStatsMutation = {
  updateUserStats?:  {
    __typename: "UserStats",
    achievementId?: string | null,
    averageSpeed?: number | null,
    dateTime?: string | null,
    elapsedTime?: number | null,
    globalSecondaryIndex?: string | null,
    hand?: string | null,
    owner?: string | null,
    primarySortKey: string,
    reps?: number | null,
    repTypes?: string | null,
    sessionTime?: number | null,
    speed?: number | null,
    statId?: string | null,
    timestamp: number,
    topSpeed?: number | null,
    userId: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserStatsMutationVariables = {
  input: DeleteUserStatsInput,
  condition?: ModelUserStatsConditionInput | null,
};

export type DeleteUserStatsMutation = {
  deleteUserStats?:  {
    __typename: "UserStats",
    achievementId?: string | null,
    averageSpeed?: number | null,
    dateTime?: string | null,
    elapsedTime?: number | null,
    globalSecondaryIndex?: string | null,
    hand?: string | null,
    owner?: string | null,
    primarySortKey: string,
    reps?: number | null,
    repTypes?: string | null,
    sessionTime?: number | null,
    speed?: number | null,
    statId?: string | null,
    timestamp: number,
    topSpeed?: number | null,
    userId: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetUserStatsQueryVariables = {
  userId: string,
  primarySortKey: string,
};

export type GetUserStatsQuery = {
  getUserStats?:  {
    __typename: "UserStats",
    achievementId?: string | null,
    averageSpeed?: number | null,
    dateTime?: string | null,
    elapsedTime?: number | null,
    globalSecondaryIndex?: string | null,
    hand?: string | null,
    owner?: string | null,
    primarySortKey: string,
    reps?: number | null,
    repTypes?: string | null,
    sessionTime?: number | null,
    speed?: number | null,
    statId?: string | null,
    timestamp: number,
    topSpeed?: number | null,
    userId: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUserStatsQueryVariables = {
  userId?: string | null,
  primarySortKey?: ModelStringKeyConditionInput | null,
  filter?: ModelUserStatsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUserStatsQuery = {
  listUserStats?:  {
    __typename: "ModelUserStatsConnection",
    items:  Array< {
      __typename: "UserStats",
      achievementId?: string | null,
      averageSpeed?: number | null,
      dateTime?: string | null,
      elapsedTime?: number | null,
      globalSecondaryIndex?: string | null,
      hand?: string | null,
      owner?: string | null,
      primarySortKey: string,
      reps?: number | null,
      repTypes?: string | null,
      sessionTime?: number | null,
      speed?: number | null,
      statId?: string | null,
      timestamp: number,
      topSpeed?: number | null,
      userId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUserStatsQueryVariables = {
  filter?: ModelUserStatsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUserStatsQuery = {
  syncUserStats?:  {
    __typename: "ModelUserStatsConnection",
    items:  Array< {
      __typename: "UserStats",
      achievementId?: string | null,
      averageSpeed?: number | null,
      dateTime?: string | null,
      elapsedTime?: number | null,
      globalSecondaryIndex?: string | null,
      hand?: string | null,
      owner?: string | null,
      primarySortKey: string,
      reps?: number | null,
      repTypes?: string | null,
      sessionTime?: number | null,
      speed?: number | null,
      statId?: string | null,
      timestamp: number,
      topSpeed?: number | null,
      userId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type UserStatsByGlobalSecondaryIndexQueryVariables = {
  globalSecondaryIndex: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserStatsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserStatsByGlobalSecondaryIndexQuery = {
  userStatsByGlobalSecondaryIndex?:  {
    __typename: "ModelUserStatsConnection",
    items:  Array< {
      __typename: "UserStats",
      achievementId?: string | null,
      averageSpeed?: number | null,
      dateTime?: string | null,
      elapsedTime?: number | null,
      globalSecondaryIndex?: string | null,
      hand?: string | null,
      owner?: string | null,
      primarySortKey: string,
      reps?: number | null,
      repTypes?: string | null,
      sessionTime?: number | null,
      speed?: number | null,
      statId?: string | null,
      timestamp: number,
      topSpeed?: number | null,
      userId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type UserStatsByPrimarySortKeyQueryVariables = {
  primarySortKey: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserStatsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserStatsByPrimarySortKeyQuery = {
  userStatsByPrimarySortKey?:  {
    __typename: "ModelUserStatsConnection",
    items:  Array< {
      __typename: "UserStats",
      achievementId?: string | null,
      averageSpeed?: number | null,
      dateTime?: string | null,
      elapsedTime?: number | null,
      globalSecondaryIndex?: string | null,
      hand?: string | null,
      owner?: string | null,
      primarySortKey: string,
      reps?: number | null,
      repTypes?: string | null,
      sessionTime?: number | null,
      speed?: number | null,
      statId?: string | null,
      timestamp: number,
      topSpeed?: number | null,
      userId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateUserStatsSubscriptionVariables = {
  filter?: ModelSubscriptionUserStatsFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserStatsSubscription = {
  onCreateUserStats?:  {
    __typename: "UserStats",
    achievementId?: string | null,
    averageSpeed?: number | null,
    dateTime?: string | null,
    elapsedTime?: number | null,
    globalSecondaryIndex?: string | null,
    hand?: string | null,
    owner?: string | null,
    primarySortKey: string,
    reps?: number | null,
    repTypes?: string | null,
    sessionTime?: number | null,
    speed?: number | null,
    statId?: string | null,
    timestamp: number,
    topSpeed?: number | null,
    userId: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserStatsSubscriptionVariables = {
  filter?: ModelSubscriptionUserStatsFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserStatsSubscription = {
  onUpdateUserStats?:  {
    __typename: "UserStats",
    achievementId?: string | null,
    averageSpeed?: number | null,
    dateTime?: string | null,
    elapsedTime?: number | null,
    globalSecondaryIndex?: string | null,
    hand?: string | null,
    owner?: string | null,
    primarySortKey: string,
    reps?: number | null,
    repTypes?: string | null,
    sessionTime?: number | null,
    speed?: number | null,
    statId?: string | null,
    timestamp: number,
    topSpeed?: number | null,
    userId: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserStatsSubscriptionVariables = {
  filter?: ModelSubscriptionUserStatsFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserStatsSubscription = {
  onDeleteUserStats?:  {
    __typename: "UserStats",
    achievementId?: string | null,
    averageSpeed?: number | null,
    dateTime?: string | null,
    elapsedTime?: number | null,
    globalSecondaryIndex?: string | null,
    hand?: string | null,
    owner?: string | null,
    primarySortKey: string,
    reps?: number | null,
    repTypes?: string | null,
    sessionTime?: number | null,
    speed?: number | null,
    statId?: string | null,
    timestamp: number,
    topSpeed?: number | null,
    userId: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
