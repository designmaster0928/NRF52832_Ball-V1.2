/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserStats = /* GraphQL */ `
  query GetUserStats($userId: ID!) {
    getUserStats(userId: $userId) {
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
export const listUserStats = /* GraphQL */ `
  query ListUserStats(
    $userId: ID
    $filter: ModelUserStatsFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUserStats(
      userId: $userId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUserStats = /* GraphQL */ `
  query SyncUserStats(
    $filter: ModelUserStatsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserStats(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const userStatsByPrimarySortKey = /* GraphQL */ `
  query UserStatsByPrimarySortKey(
    $primarySortKey: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserStatsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userStatsByPrimarySortKey(
      primarySortKey: $primarySortKey
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const userStatsByGlobalSecondaryIndex = /* GraphQL */ `
  query UserStatsByGlobalSecondaryIndex(
    $globalSecondaryIndex: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserStatsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userStatsByGlobalSecondaryIndex(
      globalSecondaryIndex: $globalSecondaryIndex
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
