/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserStats = /* GraphQL */ `
  mutation CreateUserStats(
    $input: CreateUserStatsInput!
    $condition: ModelUserStatsConditionInput
  ) {
    createUserStats(input: $input, condition: $condition) {
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
export const updateUserStats = /* GraphQL */ `
  mutation UpdateUserStats(
    $input: UpdateUserStatsInput!
    $condition: ModelUserStatsConditionInput
  ) {
    updateUserStats(input: $input, condition: $condition) {
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
export const deleteUserStats = /* GraphQL */ `
  mutation DeleteUserStats(
    $input: DeleteUserStatsInput!
    $condition: ModelUserStatsConditionInput
  ) {
    deleteUserStats(input: $input, condition: $condition) {
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
