import { gql, DocumentNode } from '@apollo/client';

export const ADMIN_GET_USER: DocumentNode = gql`
  query AdminGetUser($userId: String!) {
    adminGetUser(userId: $userId) {
      userId
      email
      userName
      cognitoStatus
      platform
      subscriptionStatus
      planType
      couponCode
      currentExercise
      lastExerciseCompleted
      lastActiveAt
      accountCreatedAt
      onboardingStartedAt
      onboardingCompletedAt
      notifSentCount
      notifTapCount
      lvcScores
    }
  }
`;
