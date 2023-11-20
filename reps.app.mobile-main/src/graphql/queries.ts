/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserStats = /* GraphQL */ `
  query GetUserStats($userId: String!, $primarySortKey: String!) {
    getUserStats(userId: $userId, primarySortKey: $primarySortKey) {
      achievementId
      averageSpeed
      dateTime
      elapsedTime
      globalSecondaryIndex
      hand
      owner
      primarySortKey
      reps
      repTypes
      sessionTime
      speed
      statId
      timestamp
      topSpeed
      userId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listUserStats = /* GraphQL */ `
  query ListUserStats(
    $userId: String
    $primarySortKey: ModelStringKeyConditionInput
    $filter: ModelUserStatsFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUserStats(
      userId: $userId
      primarySortKey: $primarySortKey
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        achievementId
        averageSpeed
        dateTime
        elapsedTime
        globalSecondaryIndex
        hand
        owner
        primarySortKey
        reps
        repTypes
        sessionTime
        speed
        statId
        timestamp
        topSpeed
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
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
        achievementId
        averageSpeed
        dateTime
        elapsedTime
        globalSecondaryIndex
        hand
        owner
        primarySortKey
        reps
        repTypes
        sessionTime
        speed
        statId
        timestamp
        topSpeed
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const userStatsByGlobalSecondaryIndex = /* GraphQL */ `
  query UserStatsByGlobalSecondaryIndex(
    $globalSecondaryIndex: String!
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
        achievementId
        averageSpeed
        dateTime
        elapsedTime
        globalSecondaryIndex
        hand
        owner
        primarySortKey
        reps
        repTypes
        sessionTime
        speed
        statId
        timestamp
        topSpeed
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const userStatsByPrimarySortKey = /* GraphQL */ `
  query UserStatsByPrimarySortKey(
    $primarySortKey: String!
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
        achievementId
        averageSpeed
        dateTime
        elapsedTime
        globalSecondaryIndex
        hand
        owner
        primarySortKey
        reps
        repTypes
        sessionTime
        speed
        statId
        timestamp
        topSpeed
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
