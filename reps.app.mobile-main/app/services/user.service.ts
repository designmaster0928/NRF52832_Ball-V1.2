import { Auth } from 'aws-amplify';

export async function deleteUser(): Promise<void> {
  try {
    const result = await Auth.deleteUser();
    console.log(result);
  } catch (error) {
    console.log('Error deleting user', error);
  }
}
