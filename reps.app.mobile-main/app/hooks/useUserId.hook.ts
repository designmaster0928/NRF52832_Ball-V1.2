import { getUserId } from 'helpers/user.helper';

export function useUserId(): string | null | undefined {
  return getUserId();
}
