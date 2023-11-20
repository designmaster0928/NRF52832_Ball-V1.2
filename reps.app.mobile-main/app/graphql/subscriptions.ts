/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserStats = /* GraphQL */ `
  subscription OnCreateUserStats(
    $filter: ModelSubscriptionUserStatsFilterInput
    $owner: String
  ) {
    onCreateUserStats(filter: $filter, owner: $owner) {
      userId
      primarySortKey
      globalSecondaryIndex
      statId
      timestamp
      throwType
      hand
      speed
      averageSpeed
      topSpeed
      reps
      sessionTime
      elapsedTime
      achievementId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateUserStats = /* GraphQL */ `
  subscription OnUpdateUserStats(
    $filter: ModelSubscriptionUserStatsFilterInput
    $owner: String
  ) {
    onUpdateUserStats(filter: $filter, owner: $owner) {
      userId
      primarySortKey
      globalSecondaryIndex
      statId
      timestamp
      throwType
      hand
      speed
      averageSpeed
      topSpeed
      reps
      sessionTime
      elapsedTime
      achievementId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteUserStats = /* GraphQL */ `
  subscription OnDeleteUserStats(
    $filter: ModelSubscriptionUserStatsFilterInput
    $owner: String
  ) {
    onDeleteUserStats(filter: $filter, owner: $owner) {
      userId
      primarySortKey
      globalSecondaryIndex
      statId
      timestamp
      throwType
      hand
      speed
      averageSpeed
      topSpeed
      reps
      sessionTime
      elapsedTime
      achievementId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
